import {
	Quaternion,
	Vector3,
	Euler,
	MathUtils
} from 'three';

/**
 * DeviceOrientationControls
 *
 * Controla la cámara con el giroscopio/acelerómetro del dispositivo (celular/tablet).
 * Usado mucho en experiencias VR o AR simples.
 */

const _zee = new Vector3( 0, 0, 1 );
const _euler = new Euler();
const _q0 = new Quaternion();
const _q1 = new Quaternion( - Math.sqrt( 0.5 ), 0, 0, Math.sqrt( 0.5 ) ); // rotación de - PI/2 sobre X

const _changeEvent = { type: 'change' };
const _lastQuaternion = new Quaternion();

class DeviceOrientationControls {

	constructor( object ) {

		if ( window.isSecureContext === false ) {

			console.error( 'THREE.DeviceOrientationControls: requiere contexto seguro (HTTPS o localhost).' );

		}

		this.object = object;
		this.object.rotation.reorder( 'YXZ' );

		this.enabled = true;

		this.deviceOrientation = {};
		this.screenOrientation = 0;

		this.alphaOffset = 0; // ángulo fijo extra sobre Z

		this.onChangeCallback = null;

		this._onDeviceOrientationChangeEvent = ( event ) => {

			this.deviceOrientation = event;

		};

		this._onScreenOrientationChangeEvent = () => {

			this.screenOrientation = window.orientation || 0;

		};

		this.connect();

	}

	connect() {

		this._onScreenOrientationChangeEvent(); // inicializa orientación

		// Eventos de navegador
		window.addEventListener( 'orientationchange', this._onScreenOrientationChangeEvent );
		window.addEventListener( 'deviceorientation', this._onDeviceOrientationChangeEvent );

		this.enabled = true;

	}

	disconnect() {

		window.removeEventListener( 'orientationchange', this._onScreenOrientationChangeEvent );
		window.removeEventListener( 'deviceorientation', this._onDeviceOrientationChangeEvent );

		this.enabled = false;

	}

	update() {

		if ( this.enabled === false ) return;

		const device = this.deviceOrientation;

		if ( device ) {

			const alpha = device.alpha ? MathUtils.degToRad( device.alpha ) + this.alphaOffset : 0; // Z
			const beta = device.beta ? MathUtils.degToRad( device.beta ) : 0; // X'
			const gamma = device.gamma ? MathUtils.degToRad( device.gamma ) : 0; // Y''
			const orient = this.screenOrientation ? MathUtils.degToRad( this.screenOrientation ) : 0; // screen orientation

			this.setObjectQuaternion( this.object.quaternion, alpha, beta, gamma, orient );

			// dispara "change" si realmente cambió la rotación
			if ( 8 * ( 1 - _lastQuaternion.dot( this.object.quaternion ) ) > 1e-6 ) {

				_lastQuaternion.copy( this.object.quaternion );

				if ( this.onChangeCallback ) {
					this.onChangeCallback();
				}

			}

		}

	}

	setObjectQuaternion( quaternion, alpha, beta, gamma, orient ) {

		_euler.set( beta, alpha, - gamma, 'YXZ' ); // 'ZXY' para los ángulos del dispositivo
		quaternion.setFromEuler( _euler ); // orienta la cámara

		quaternion.multiply( _q1 ); // aplica la rotación de la cámara
		quaternion.multiply( _q0.setFromAxisAngle( _zee, - orient ) ); // corrige según la orientación de la pantalla

	}

	dispose() {
		this.disconnect();
	}

	addEventListener( type, callback ) {
		if ( type === 'change' ) this.onChangeCallback = callback;
	}

	removeEventListener( type ) {
		if ( type === 'change' ) this.onChangeCallback = null;
	}

}

export { DeviceOrientationControls };
