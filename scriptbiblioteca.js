var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light, light2, light3, light4, hemiLight;


function init() {
	
	var canvasWidth = window.innerWidth * 1;
	var canvasHeight = window.innerHeight * 0.85;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(0,50,100);
	//camera.lookAt(1,0,0);

	// LIGHTS

	light = new THREE.SpotLight( 0xffffff, 0.2);
	light.position.set( 0,  80 , -100 );
	light.target.position.set(0,0,-100);
	light.castShadow=true;
	light.receiveShadow=true;
	//light.target.position.set(0, 0, 0);
	if(true){
		light.castShadow = true;

		/*light.shadowCameraNear = 10;
		light.shadowCameraFar = 30;//camera.far;
		light.shadowCameraFov = 20;

		light.shadowMapBias = 0.05;
		light.shadowMapDarkness = 0.7;
		light.shadowMapWidth = 2*128;
		light.shadowMapHeight = 2*128;*/

		//light.shadowCameraVisible = true;
	}

	light2 = new THREE.SpotLight( 0xffffff, 0.2);
	light2.position.set( 0,  80 , 100 );
	light2.target.position.set(0,0,100);
	light2.castShadow=true;
	light2.receiveShadow=true;
	//light.target.position.set(0, 0, 0);
	if(true){
		light2.castShadow = true;

		/*light2.shadowCameraNear = 10;
		light2.shadowCameraFar = 30;//camera.far;
		light2.shadowCameraFov = 20;

		light2.shadowMapBias = 0.05;
		light2.shadowMapDarkness = 0.7;
		light2.shadowMapWidth = 2*128;
		light2.shadowMapHeight = 2*128;

		//light.shadowCameraVisible = true;*/
	}

	light3 = new THREE.SpotLight( 0xffffff, 0.2);
	light3.position.set( -80,  50 , 0 );
	light3.castShadow=true;
	light3.receiveShadow=true;
	//light.target.position.set(0, 0, 0);
	if(true){
		light3.castShadow = true;

		light3.shadowCameraNear = 10;
		light3.shadowCameraFar = 30;//camera.far;
		light3.shadowCameraFov = 20;

		light3.shadowMapBias = 0.05;
		light3.shadowMapDarkness = 0.7;
		light3.shadowMapWidth = 2*128;
		light3.shadowMapHeight = 2*128;

		//light.shadowCameraVisible = true;
	}

	light4 = new THREE.SpotLight( 0xffffff, 0.2);
	light4.position.set( -30,  50 , 30 );
	light4.castShadow=true;
	light4.receiveShadow=true;
	//light.target.position.set(0, 0, 0);
	if(true){
		light4.castShadow = true;

		light4.shadowCameraNear = 10;
		light4.shadowCameraFar = 30;//camera.far;
		light4.shadowCameraFov = 20;

		light4.shadowMapBias = 0.05;
		light4.shadowMapDarkness = 0.7;
		light4.shadowMapWidth = 2*128;
		light4.shadowMapHeight = 2*128;

		//light.shadowCameraVisible = true;
	}


	var ambientLight = new THREE.AmbientLight( 0x111111);

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.toneMapping=THREE.ReinhardToneMapping;
	renderer.toneMappingExposure=2.3;
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xBAEAE7, 1.0 );
	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);
	//hemi


	// OBJECT
    var basemesa = new THREE.Geometry();
    basemesa.vertices.push(new THREE.Vector3(0.5,9,0.5));//0
    basemesa.vertices.push(new THREE.Vector3(0.5,9,-0.5));//1
    basemesa.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
    basemesa.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
    basemesa.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
    basemesa.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
    basemesa.vertices.push(new THREE.Vector3(-0.5,9,-0.5));//6
    basemesa.vertices.push(new THREE.Vector3(-0.5,9,0.5));//7
    basemesa.faces.push(new THREE.Face3(0,3,2));
	basemesa.faces.push(new THREE.Face3(0,2,1));
    basemesa.faces.push(new THREE.Face3(5,1,2));
	basemesa.faces.push(new THREE.Face3(6,1,5));
	basemesa.faces.push(new THREE.Face3(7,6,5));
	basemesa.faces.push(new THREE.Face3(7,5,4));
	basemesa.faces.push(new THREE.Face3(0,7,4));
	basemesa.faces.push(new THREE.Face3(0,4,3));  
    basemesa.computeFaceNormals();
	var materialbasemesa=new THREE.MeshPhongMaterial({color:0x000000});
	var objetobasemesa=new THREE.Mesh(basemesa,materialbasemesa);
	objetobasemesa.castShadow=true;
	objetobasemesa.receiveShadow=true;
	var objetobasemesa1=new THREE.Mesh(basemesa,materialbasemesa);
	var objetobasemesa2=new THREE.Mesh(basemesa,materialbasemesa);
	var objetobasemesa3=new THREE.Mesh(basemesa,materialbasemesa);
	objetobasemesa1.castShadow=true;
	objetobasemesa1.receiveShadow=true;
	objetobasemesa2.castShadow=true;
	objetobasemesa2.receiveShadow=true;
	objetobasemesa3.castShadow=true;
	objetobasemesa3.receiveShadow=true;

	
	objetobasemesa.scale.set(0.4,0.9,0.4);
	objetobasemesa1.scale.set(0.4,0.9,0.4);
	objetobasemesa2.scale.set(0.4,0.9,0.4);
	objetobasemesa3.scale.set(0.4,0.9,0.4);
	objetobasemesa.translateX(6);
	objetobasemesa.translateZ(2.5);
	objetobasemesa1.translateX(6);
	objetobasemesa1.translateZ(-2.5);
	objetobasemesa2.translateX(-6);
	objetobasemesa2.translateZ(2.5);
	objetobasemesa3.translateX(-6);
	objetobasemesa3.translateZ(-2.5);	

	
	var mesavert=new THREE.Geometry();
	mesavert.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	mesavert.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	mesavert.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	mesavert.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	mesavert.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	mesavert.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	mesavert.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	mesavert.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	mesavert.faces.push(new THREE.Face3(0,3,2));
	mesavert.faces.push(new THREE.Face3(0,2,1));
    mesavert.faces.push(new THREE.Face3(5,1,2));
	mesavert.faces.push(new THREE.Face3(6,1,5));
	mesavert.faces.push(new THREE.Face3(7,6,5));
	mesavert.faces.push(new THREE.Face3(7,5,4));
	mesavert.faces.push(new THREE.Face3(0,7,4));
	mesavert.faces.push(new THREE.Face3(0,4,3));  
	mesavert.faces.push(new THREE.Face3(7,0,1));  
	mesavert.faces.push(new THREE.Face3(6,7,1));
	mesavert.faces.push(new THREE.Face3(2,3,4));  
	mesavert.faces.push(new THREE.Face3(2,4,5));  
	mesavert.computeFaceNormals();
	var materialmesa=new THREE.MeshPhongMaterial({color:0x66562D});
	var objetomesa=new THREE.Mesh(mesavert, materialmesa);
	objetomesa.castShadow=true;
	objetomesa.receiveShadow=true;
	objetomesa.scale.set(15,0.4,7);
	objetomesa.translateY(8);
	const mesatextextura= new THREE.TextureLoader().load('img/madera.jpg');
	var mesatextex=new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xffffff, map:mesatextextura})

	);
	mesatextex.translateY(8.2);
	mesatextex.scale.set(15.1,0.41,7.1);
	var objetomesa2=new THREE.Mesh(mesavert, materialmesa);
	objetomesa2.castShadow=true;
	objetomesa2.receiveShadow=true;
	objetomesa2.scale.set(12,0.3,5.2);
	objetomesa2.translateY(7.9);
	var mesatextex1=new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xffffff, map:mesatextextura})

	);
	
	mesatextex1.translateY(7);
	mesatextex1.scale.set(12.1,0.31,5.21);
	var teclado=new THREE.Geometry();
	teclado.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
    teclado.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
    teclado.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
    teclado.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
    teclado.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
    teclado.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
    teclado.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	teclado.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	teclado.faces.push(new THREE.Face3(0,3,2));
	teclado.faces.push(new THREE.Face3(0,2,1));
  	teclado.faces.push(new THREE.Face3(5,1,2));
	teclado.faces.push(new THREE.Face3(6,1,5));
	teclado.faces.push(new THREE.Face3(7,6,5));
	teclado.faces.push(new THREE.Face3(7,5,4));
	teclado.faces.push(new THREE.Face3(0,7,4));
	teclado.faces.push(new THREE.Face3(0,4,3));  
	teclado.faces.push(new THREE.Face3(7,0,1));  
	teclado.faces.push(new THREE.Face3(6,7,1));
	teclado.faces.push(new THREE.Face3(2,3,4));  
	teclado.faces.push(new THREE.Face3(2,4,5));  
	teclado.computeFaceNormals();
	var materialteclado=new THREE.MeshPhongMaterial({color:0x282727});
	var objetoteclado=new THREE.Mesh(teclado, materialteclado);
	objetoteclado.castShadow=true;
	objetoteclado.receiveShadow=true;
	objetoteclado.translateX(2.5);
	objetoteclado.translateY(8.3);
	objetoteclado.translateZ(1.5);
	objetoteclado.scale.set(3.2,0.3,1.2);
	const tecladotextura= new THREE.TextureLoader().load('img/teclado.png');
	var tecladotex=new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xffffff, map:tecladotextura})

	);
	tecladotex.translateX(2.5);
	tecladotex.translateY(8.47);
	tecladotex.translateZ(1.5);
	tecladotex.scale.set(3.198,0.28,1.198);
	var objetoteclado1=new THREE.Mesh(teclado, materialteclado);
	objetoteclado1.castShadow=true;
	objetoteclado1.receiveShadow=true;
	objetoteclado1.translateX(-4.8);
	objetoteclado1.translateY(8.3);
	objetoteclado1.translateZ(1.5);
	objetoteclado1.scale.set(3.2,0.3,1.2);
	var tecladotex1=new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xffffff, map:tecladotextura})

	);
	tecladotex1.translateX(-4.8);
	tecladotex1.translateY(8.47);
	tecladotex1.translateZ(1.5);
	tecladotex1.scale.set(3.198,0.28,1.198);
	var mouse=new THREE.Geometry();
	mouse.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	mouse.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	mouse.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	mouse.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	mouse.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	mouse.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	mouse.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	mouse.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	mouse.faces.push(new THREE.Face3(0,3,2));
	mouse.faces.push(new THREE.Face3(0,2,1));
  	mouse.faces.push(new THREE.Face3(5,1,2));
	mouse.faces.push(new THREE.Face3(6,1,5));
	mouse.faces.push(new THREE.Face3(7,6,5));
	mouse.faces.push(new THREE.Face3(7,5,4));
	mouse.faces.push(new THREE.Face3(0,7,4));
	mouse.faces.push(new THREE.Face3(0,4,3));  
	mouse.faces.push(new THREE.Face3(7,0,1));  
	mouse.faces.push(new THREE.Face3(6,7,1));
	mouse.faces.push(new THREE.Face3(2,3,4));  
	mouse.faces.push(new THREE.Face3(2,4,5));  
	mouse.computeFaceNormals();
	var materialmouse= new THREE.MeshPhongMaterial({color:0x282727});
	var objetomouse=new THREE.Mesh(mouse,materialmouse);
	objetomouse.translateX(-2.8);
	objetomouse.translateY(8.3);
	objetomouse.translateZ(1.5);
	objetomouse.scale.set(0.4,0.37,0.7);
	var objetomouse1=new THREE.Mesh(mouse,materialmouse);
	objetomouse1.translateX(4.6);
	objetomouse1.translateY(8.3);
	objetomouse1.translateZ(1.5);
	objetomouse1.scale.set(0.4,0.37,0.7);
	var monitor=new THREE.Geometry();
	monitor.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	monitor.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	monitor.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	monitor.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	monitor.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	monitor.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	monitor.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	monitor.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	monitor.faces.push(new THREE.Face3(0,3,2));
	monitor.faces.push(new THREE.Face3(0,2,1));
  	monitor.faces.push(new THREE.Face3(5,1,2));
	monitor.faces.push(new THREE.Face3(6,1,5));
	monitor.faces.push(new THREE.Face3(7,6,5));
	monitor.faces.push(new THREE.Face3(7,5,4));
	monitor.faces.push(new THREE.Face3(0,7,4));
	monitor.faces.push(new THREE.Face3(0,4,3));  
	monitor.faces.push(new THREE.Face3(7,0,1));  
	monitor.faces.push(new THREE.Face3(6,7,1));
	monitor.faces.push(new THREE.Face3(2,3,4));  
	monitor.faces.push(new THREE.Face3(2,4,5));  
	monitor.computeFaceNormals();
	var materialmonitor=new THREE.MeshPhongMaterial({color:0x282727});
	var objetomonitor=new THREE.Mesh(monitor,materialmonitor);
	objetomonitor.castShadow=true;
	objetomonitor.receiveShadow=true;
	objetomonitor.translateX(2.6);
	objetomonitor.translateY(8.5);
	objetomonitor.translateZ(-1);
	objetomonitor.scale.set(5,3,0.2);
	const pantallatextura= new THREE.TextureLoader().load('img/pantalla.png');
	var pantalla=new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xffffff, map:pantallatextura})

	);
	pantalla.translateX(2.6);
	pantalla.translateY(10);
	pantalla.translateZ(-0.99);
	pantalla.scale.set(4.8,2.8,0.19);
	var objetomonitor1=new THREE.Mesh(monitor,materialmonitor);
	objetomonitor1.translateX(-4.8);
	objetomonitor1.translateY(8.5);
	objetomonitor1.translateZ(-1);
	objetomonitor1.scale.set(5,3,0.2);
	var pantalla1=new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xffffff, map:pantallatextura})

	);
	pantalla1.translateX(-4.8);
	pantalla1.translateY(10);
	pantalla1.translateZ(-0.99);
	pantalla1.scale.set(4.8,2.8,0.19);
	var pc=new THREE.Geometry();
	pc.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	pc.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	pc.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	pc.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	pc.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	pc.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	pc.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	pc.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	pc.faces.push(new THREE.Face3(0,3,2));
	pc.faces.push(new THREE.Face3(0,2,1));
  	pc.faces.push(new THREE.Face3(5,1,2));
	pc.faces.push(new THREE.Face3(6,1,5));
	pc.faces.push(new THREE.Face3(7,6,5));
	pc.faces.push(new THREE.Face3(7,5,4));
	pc.faces.push(new THREE.Face3(0,7,4));
	pc.faces.push(new THREE.Face3(0,4,3));  
	pc.faces.push(new THREE.Face3(7,0,1));  
	pc.faces.push(new THREE.Face3(6,7,1));
	pc.faces.push(new THREE.Face3(2,3,4));  
	pc.faces.push(new THREE.Face3(2,4,5));  
	pc.computeFaceNormals();
	var materialpc=new THREE.MeshPhongMaterial({color:0x282727});
	var objetopc=new THREE.Mesh(pc,materialpc);
	objetopc.castShadow=true;
	objetopc.receiveShadow=true;
	objetopc.translateX(4.2);
	objetopc.translateY(1.5);
	objetopc.translateZ(0.5);
	objetopc.scale.set(2,4,4.7);
	var objetopc1=new THREE.Mesh(pc,materialpc);
	objetopc1.castShadow=true;
	objetopc1.receiveShadow=true;
	objetopc1.translateX(-4.2);
	objetopc1.translateY(1.5);
	objetopc1.translateZ(0.5);
	objetopc1.scale.set(2,4,4.7);
	var basepc=new THREE.Geometry();
	basepc.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	basepc.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	basepc.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	basepc.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	basepc.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	basepc.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	basepc.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	basepc.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	basepc.faces.push(new THREE.Face3(0,3,2));
	basepc.faces.push(new THREE.Face3(0,2,1));
  	basepc.faces.push(new THREE.Face3(5,1,2));
	basepc.faces.push(new THREE.Face3(6,1,5));
	basepc.faces.push(new THREE.Face3(7,6,5));
	basepc.faces.push(new THREE.Face3(7,5,4));
	basepc.faces.push(new THREE.Face3(0,7,4));
	basepc.faces.push(new THREE.Face3(0,4,3));  
	basepc.faces.push(new THREE.Face3(7,0,1));  
	basepc.faces.push(new THREE.Face3(6,7,1));
	basepc.faces.push(new THREE.Face3(2,3,4));  
	basepc.faces.push(new THREE.Face3(2,4,5));  
	basepc.computeFaceNormals();
	var materialbasepc=new THREE.MeshPhongMaterial({color:0x66562D});
	var objetobasepc=new THREE.Mesh(basepc,materialbasepc);
	objetobasepc.castShadow=true;
	objetobasepc.receiveShadow=true;
	objetobasepc.translateX(4.35);
	objetobasepc.translateY(1.5);
	objetobasepc.translateZ(0);
	objetobasepc.scale.set(3,0.23,6);
	var objetobasepc1=new THREE.Mesh(basepc,materialbasepc);
	objetobasepc1.castShadow=true;
	objetobasepc1.receiveShadow=true;
	objetobasepc1.translateX(-4.35);
	objetobasepc1.translateY(1.5);
	objetobasepc1.translateZ(0);
	objetobasepc1.scale.set(3,0.23,6);
	var basepcmetal=new THREE.Geometry();
	basepcmetal.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	basepcmetal.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	basepcmetal.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	basepcmetal.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	basepcmetal.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	basepcmetal.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	basepcmetal.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	basepcmetal.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	basepcmetal.faces.push(new THREE.Face3(0,3,2));
	basepcmetal.faces.push(new THREE.Face3(0,2,1));
  	basepcmetal.faces.push(new THREE.Face3(5,1,2));
	basepcmetal.faces.push(new THREE.Face3(6,1,5));
	basepcmetal.faces.push(new THREE.Face3(7,6,5));
	basepcmetal.faces.push(new THREE.Face3(7,5,4));
	basepcmetal.faces.push(new THREE.Face3(0,7,4));
	basepcmetal.faces.push(new THREE.Face3(0,4,3));  
	basepcmetal.faces.push(new THREE.Face3(7,0,1));  
	basepcmetal.faces.push(new THREE.Face3(6,7,1));
	basepcmetal.faces.push(new THREE.Face3(2,3,4));  
	basepcmetal.faces.push(new THREE.Face3(2,4,5));  
	basepcmetal.computeFaceNormals();
	var materialbasepcmetal=new THREE.MeshPhongMaterial({color:0x000000});
	var objetobasepcmetal=new THREE.Mesh(basepcmetal,materialbasepcmetal);
	objetobasepcmetal.castShadow=true;
	objetobasepcmetal.receiveShadow=true;
	objetobasepcmetal.translateX(-2.7);
	objetobasepcmetal.translateY(0);
	objetobasepcmetal.translateZ(2.5);
	objetobasepcmetal.scale.set(0.3,7,0.3);
	var objetobasepcmetal1=new THREE.Mesh(basepcmetal,materialbasepcmetal);
	objetobasepcmetal1.castShadow=true;
	objetobasepcmetal1.receiveShadow=true;
	objetobasepcmetal1.translateX(-2.7);
	objetobasepcmetal1.translateY(0);
	objetobasepcmetal1.translateZ(-2.5);
	objetobasepcmetal1.scale.set(0.3,7,0.3);
	var objetobasepcmetal2=new THREE.Mesh(basepcmetal,materialbasepcmetal);
	objetobasepcmetal2.castShadow=true;
	objetobasepcmetal2.receiveShadow=true;
	objetobasepcmetal2.translateX(2.7);
	objetobasepcmetal2.translateY(0);
	objetobasepcmetal2.translateZ(2.5);
	objetobasepcmetal2.scale.set(0.3,7,0.3);
	var objetobasepcmetal3=new THREE.Mesh(basepcmetal,materialbasepcmetal);
	objetobasepcmetal3.castShadow=true;
	objetobasepcmetal3.receiveShadow=true;
	objetobasepcmetal3.translateX(2.7);
	objetobasepcmetal3.translateY(0);
	objetobasepcmetal3.translateZ(-2.5);
	objetobasepcmetal3.scale.set(0.3,7,0.3);
	var sillap=new THREE.Geometry();
	sillap.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	sillap.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	sillap.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	sillap.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	sillap.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	sillap.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	sillap.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	sillap.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	sillap.faces.push(new THREE.Face3(0,3,2));
	sillap.faces.push(new THREE.Face3(0,2,1));
  	sillap.faces.push(new THREE.Face3(5,1,2));
	sillap.faces.push(new THREE.Face3(6,1,5));
	sillap.faces.push(new THREE.Face3(7,6,5));
	sillap.faces.push(new THREE.Face3(7,5,4));
	sillap.faces.push(new THREE.Face3(0,7,4));
	sillap.faces.push(new THREE.Face3(0,4,3));  
	sillap.faces.push(new THREE.Face3(7,0,1));  
	sillap.faces.push(new THREE.Face3(6,7,1));
	sillap.faces.push(new THREE.Face3(2,3,4));  
	sillap.faces.push(new THREE.Face3(2,4,5)); 
	sillap.computeFaceNormals(); 
	var materialsillap=new THREE.MeshPhongMaterial({color:0x8A9597});
	var objetosillap=new THREE.Mesh(sillap,materialsillap);
	objetosillap.castShadow=true;
	objetosillap.receiveShadow=true;
	
	objetosillap.translateX(1.3);
	objetosillap.translateY(0);
	objetosillap.translateZ(1);
	objetosillap.scale.set(0.3,8,0.3);
	var objetosillap1=new THREE.Mesh(sillap,materialsillap);
	objetosillap1.castShadow=true;
	objetosillap1.receiveShadow=true;
	objetosillap1.translateX(1.3);
	objetosillap1.translateY(0);
	objetosillap1.translateZ(-1);
	objetosillap1.scale.set(0.3,4.5,0.3);
	var objetosillap2=new THREE.Mesh(sillap,materialsillap);
	objetosillap2.castShadow=true;
	objetosillap2.receiveShadow=true;
	objetosillap2.translateX(-1.3);
	objetosillap2.translateY(0);
	objetosillap2.translateZ(-1);
	objetosillap2.scale.set(0.3,4.5,0.3);
	var objetosillap3=new THREE.Mesh(sillap,materialsillap);
	objetosillap3.castShadow=true;
	objetosillap3.receiveShadow=true;
	objetosillap3.translateX(-1.3);
	objetosillap3.translateY(0);
	objetosillap3.translateZ(1);
	objetosillap3.scale.set(0.3,8,0.3);
	var sillabase=new THREE.Geometry();
	sillabase.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	sillabase.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	sillabase.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	sillabase.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	sillabase.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	sillabase.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	sillabase.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	sillabase.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	sillabase.faces.push(new THREE.Face3(0,3,2));
	sillabase.faces.push(new THREE.Face3(0,2,1));
  	sillabase.faces.push(new THREE.Face3(5,1,2));
	sillabase.faces.push(new THREE.Face3(6,1,5));
	sillabase.faces.push(new THREE.Face3(7,6,5));
	sillabase.faces.push(new THREE.Face3(7,5,4));
	sillabase.faces.push(new THREE.Face3(0,7,4));
	sillabase.faces.push(new THREE.Face3(0,4,3));  
	sillabase.faces.push(new THREE.Face3(7,0,1));  
	sillabase.faces.push(new THREE.Face3(6,7,1));
	sillabase.faces.push(new THREE.Face3(2,3,4));  
	sillabase.faces.push(new THREE.Face3(2,4,5));  
	sillabase.computeFaceNormals();
	var materialsillabase=new THREE.MeshPhongMaterial({color:0x000000});
	var objetosillabase=new THREE.Mesh(sillabase,materialsillabase);
	objetosillabase.castShadow=true;
	objetosillabase.receiveShadow=true;
	objetosillabase.translateX(0);
	objetosillabase.translateY(4.5);
	objetosillabase.translateZ(0);
	objetosillabase.scale.set(3.6,0.7,2.5);
	var sillaespalda=new THREE.Geometry();
	sillaespalda.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	sillaespalda.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	sillaespalda.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	sillaespalda.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	sillaespalda.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	sillaespalda.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	sillaespalda.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	sillaespalda.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	sillaespalda.faces.push(new THREE.Face3(0,3,2));
	sillaespalda.faces.push(new THREE.Face3(0,2,1));
  	sillaespalda.faces.push(new THREE.Face3(5,1,2));
	sillaespalda.faces.push(new THREE.Face3(6,1,5));
	sillaespalda.faces.push(new THREE.Face3(7,6,5));
	sillaespalda.faces.push(new THREE.Face3(7,5,4));
	sillaespalda.faces.push(new THREE.Face3(0,7,4));
	sillaespalda.faces.push(new THREE.Face3(0,4,3));  
	sillaespalda.faces.push(new THREE.Face3(7,0,1));  
	sillaespalda.faces.push(new THREE.Face3(6,7,1));
	sillaespalda.faces.push(new THREE.Face3(2,3,4));  
	sillaespalda.faces.push(new THREE.Face3(2,4,5)); 
	sillaespalda.computeFaceNormals(); 
	var materialsillaespalda=new THREE.MeshPhongMaterial({color:0x000000});
	var objetosillaespalda=new THREE.Mesh(sillaespalda,materialsillaespalda);
	objetosillaespalda.castShadow=true;
	objetosillaespalda.receiveShadow=true;
	objetosillaespalda.translateX(0);
	objetosillaespalda.translateY(6.5);
	objetosillaespalda.translateZ(1);
	objetosillaespalda.scale.set(3.5,1.8,0.45);
	var gruposilla=new THREE.Group();
	gruposilla.add(objetosillabase);
	gruposilla.add(objetosillaespalda);
	gruposilla.add(objetosillap);
	gruposilla.add(objetosillap1);
	gruposilla.add(objetosillap2);
	gruposilla.add(objetosillap3);
	var gruposilla1=gruposilla.clone();
	gruposilla.translateX(3.5);
	gruposilla.translateY(0);
	gruposilla.translateZ(6);
	gruposilla1.translateX(-3.5);
	gruposilla1.translateY(0);
	gruposilla1.translateZ(6);
	var grupolaboratoriocompu=new THREE.Group();
	grupolaboratoriocompu.add(objetobasemesa);
	grupolaboratoriocompu.add(objetobasemesa1);
	grupolaboratoriocompu.add(objetobasemesa2);
	grupolaboratoriocompu.add(objetobasemesa3);
	grupolaboratoriocompu.add(mesatextex);
	grupolaboratoriocompu.add(mesatextex1);	
	grupolaboratoriocompu.add(objetomesa);
	grupolaboratoriocompu.add(objetomesa2);
	grupolaboratoriocompu.add(objetoteclado);
	grupolaboratoriocompu.add(objetoteclado1);
	grupolaboratoriocompu.add(tecladotex);
	grupolaboratoriocompu.add(tecladotex1);
	grupolaboratoriocompu.add(objetomouse);
	grupolaboratoriocompu.add(objetomouse1);
	grupolaboratoriocompu.add(objetomonitor);
	grupolaboratoriocompu.add(objetomonitor1);
	grupolaboratoriocompu.add(pantalla);
	grupolaboratoriocompu.add(pantalla1);
	grupolaboratoriocompu.add(objetopc);
	grupolaboratoriocompu.add(objetopc1);
	grupolaboratoriocompu.add(objetobasepcmetal);
	grupolaboratoriocompu.add(objetobasepcmetal1);
	grupolaboratoriocompu.add(objetobasepcmetal2);
	grupolaboratoriocompu.add(objetobasepcmetal3);
	grupolaboratoriocompu.add(gruposilla);
	grupolaboratoriocompu.add(gruposilla1);

	const mesaopctextura= new THREE.TextureLoader().load('img/madera.jpg');
	var mesaopctex=new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xffffff, map:mesaopctextura})

	);
	mesaopctex.translateX(2);
	mesaopctex.translateY(8);
	mesaopctex.scale.set(12,0.7,7);

	var grupobibliotecas=new THREE.Group();
	grupobibliotecas.add(objetobasemesa);
	grupobibliotecas.add(objetobasemesa1);
	grupobibliotecas.add(objetobasemesa2);
	grupobibliotecas.add(objetobasemesa3);
	grupobibliotecas.add(mesatextex);
	grupobibliotecas.add(mesatextex1);
	grupobibliotecas.add(objetomesa);
	grupobibliotecas.add(objetomesa2);
	grupobibliotecas.add(objetoteclado);
	grupobibliotecas.add(tecladotex);
	grupobibliotecas.add(objetomouse);
	grupobibliotecas.add(objetomonitor);
	grupobibliotecas.add(pantalla);
	grupobibliotecas.add(objetopc);
	grupobibliotecas.add(objetobasepcmetal);
	grupobibliotecas.add(objetobasepcmetal1);
	grupobibliotecas.add(gruposilla);
	grupobibliotecas.add(mesaopctex);
	grupobibliotecas.translateX(-118);
	grupobibliotecas.translateZ(60);
	grupobibliotecas.scale.set(2,2,2);
	grupobibliotecas.rotation.y=Math.PI/2+Math.PI;
	

	var grupolaboratoriocompu1=grupolaboratoriocompu.clone();
	var grupolaboratoriocompu2=grupolaboratoriocompu.clone();
	var grupolaboratoriocompu3=grupolaboratoriocompu.clone();
	var grupolaboratoriocompu4=grupolaboratoriocompu.clone();
	var grupolaboratoriocompu5=grupolaboratoriocompu.clone();
	var grupolaboratoriocompu6=grupolaboratoriocompu.clone();
	var grupolaboratoriocompu7=grupolaboratoriocompu.clone();
	grupolaboratoriocompu.translateX(7);
	grupolaboratoriocompu.translateZ(0);
	grupolaboratoriocompu1.translateX(-7);
	grupolaboratoriocompu1.translateZ(0);
	grupolaboratoriocompu2.translateX(7);
	grupolaboratoriocompu2.translateZ(15);
	grupolaboratoriocompu3.translateX(-7);
	grupolaboratoriocompu3.translateZ(15);
	grupolaboratoriocompu4.translateX(7);
	grupolaboratoriocompu4.translateZ(-15);
	grupolaboratoriocompu5.translateX(-7);
	grupolaboratoriocompu5.translateZ(-15);
	grupolaboratoriocompu6.translateX(7);
	grupolaboratoriocompu6.translateZ(30);
	grupolaboratoriocompu7.translateX(-7);
	grupolaboratoriocompu7.translateZ(30);
	var grupoenmasacompu=new THREE.Group();
	grupoenmasacompu.add(grupolaboratoriocompu);
	grupoenmasacompu.add(grupolaboratoriocompu1);
	grupoenmasacompu.add(grupolaboratoriocompu2);
	grupoenmasacompu.add(grupolaboratoriocompu3);
	grupoenmasacompu.add(grupolaboratoriocompu4);
	grupoenmasacompu.add(grupolaboratoriocompu5);
	grupoenmasacompu.add(grupolaboratoriocompu6);
	grupoenmasacompu.add(grupolaboratoriocompu7);
	var grupoenmasacompu1=grupoenmasacompu.clone();
	var grupoenmasacompu2=grupoenmasacompu.clone();
	var grupoenmasacompu3=grupoenmasacompu.clone();
	grupoenmasacompu.translateX(20);
	grupoenmasacompu.translateZ(35);
	grupoenmasacompu1.translateX(-20);
	grupoenmasacompu1.translateZ(35);
	grupoenmasacompu2.translateX(20);
	grupoenmasacompu2.translateZ(-35);
	grupoenmasacompu3.translateX(-20);
	grupoenmasacompu3.translateZ(-35);
	var grupodoblemasa=new THREE.Group();
	grupodoblemasa.add(grupoenmasacompu);
	grupodoblemasa.add(grupoenmasacompu1);
	grupodoblemasa.add(grupoenmasacompu2);
	grupodoblemasa.add(grupoenmasacompu3);
	var grupodoblemasa1=grupodoblemasa.clone();
	grupodoblemasa.translateX(60);
	grupodoblemasa1.translateX(-60);
	var pizarramarco=new THREE.Geometry();
	pizarramarco.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	pizarramarco.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	pizarramarco.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	pizarramarco.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	pizarramarco.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	pizarramarco.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	pizarramarco.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	pizarramarco.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	pizarramarco.faces.push(new THREE.Face3(0,3,2));
	pizarramarco.faces.push(new THREE.Face3(0,2,1));
  	pizarramarco.faces.push(new THREE.Face3(5,1,2));
	pizarramarco.faces.push(new THREE.Face3(6,1,5));
	pizarramarco.faces.push(new THREE.Face3(7,6,5));
	pizarramarco.faces.push(new THREE.Face3(7,5,4));
	pizarramarco.faces.push(new THREE.Face3(0,7,4));
	pizarramarco.faces.push(new THREE.Face3(0,4,3));  
	pizarramarco.faces.push(new THREE.Face3(7,0,1));  
	pizarramarco.faces.push(new THREE.Face3(6,7,1));
	pizarramarco.faces.push(new THREE.Face3(2,3,4));  
	pizarramarco.faces.push(new THREE.Face3(2,4,5));  
	pizarramarco.computeFaceNormals();
	var materialpizarramarco=new THREE.MeshPhongMaterial({color:0xD6D5D8});
	var objetopizarramarco=new THREE.Mesh(pizarramarco,materialpizarramarco);
	objetopizarramarco.translateX(10);
	objetopizarramarco.translateY(15);
	objetopizarramarco.translateZ(0);
	objetopizarramarco.scale.set(0.5,8,0.7);
	var objetopizarramarco1=new THREE.Mesh(pizarramarco,materialpizarramarco);
	objetopizarramarco1.translateX(-10);
	objetopizarramarco1.translateY(15);
	objetopizarramarco1.translateZ(0);
	objetopizarramarco1.scale.set(0.5,8,0.7);
	var objetopizarramarco2=new THREE.Mesh(pizarramarco,materialpizarramarco);
	objetopizarramarco2.translateX(0);
	objetopizarramarco2.translateY(23);
	objetopizarramarco2.translateZ(0);
	objetopizarramarco2.scale.set(20.5,0.7,0.7);
	var objetopizarramarco3=new THREE.Mesh(pizarramarco,materialpizarramarco);
	objetopizarramarco3.translateX(0);
	objetopizarramarco3.translateY(15);
	objetopizarramarco3.translateZ(0);
	objetopizarramarco3.scale.set(20,0.7,0.7);
	
	var pizarra=new THREE.Geometry();
	pizarra.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	pizarra.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	pizarra.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	pizarra.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	pizarra.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	pizarra.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	pizarra.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	pizarra.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	pizarra.faces.push(new THREE.Face3(0,3,2));
	pizarra.faces.push(new THREE.Face3(0,2,1));
  	pizarra.faces.push(new THREE.Face3(5,1,2));
	pizarra.faces.push(new THREE.Face3(6,1,5));
	pizarra.faces.push(new THREE.Face3(7,6,5));
	pizarra.faces.push(new THREE.Face3(7,5,4));
	pizarra.faces.push(new THREE.Face3(0,7,4));
	pizarra.faces.push(new THREE.Face3(0,4,3));  
	pizarra.faces.push(new THREE.Face3(7,0,1));  
	pizarra.faces.push(new THREE.Face3(6,7,1));
	pizarra.faces.push(new THREE.Face3(2,3,4));  
	pizarra.faces.push(new THREE.Face3(2,4,5));  
	pizarra.computeFaceNormals();
	var materialpizarra=new THREE.MeshPhongMaterial({color:0xffffff});
	var objetopizarra=new THREE.Mesh(pizarra,materialpizarra);
	objetopizarra.translateX(0);
	objetopizarra.translateY(15);
	objetopizarra.translateZ(0);
	objetopizarra.scale.set(20,8,0.2);
	var grupopizarra=new THREE.Group();
	grupopizarra.add(objetopizarra);
	grupopizarra.add(objetopizarramarco);
	grupopizarra.add(objetopizarramarco1);
	grupopizarra.add(objetopizarramarco2);
	grupopizarra.add(objetopizarramarco3);
	var grupopizarra1=grupopizarra.clone()
	grupopizarra.scale.set(2,2.5,1);
	grupopizarra.translateY(-23);
	grupopizarra.translateX(-60);
	grupopizarra.translateZ(-85);
	grupopizarra1.scale.set(2,2.5,1);
	grupopizarra1.translateY(-23);
	grupopizarra1.translateX(60);
	grupopizarra1.translateZ(-85);

	var puerta=new THREE.Geometry();
	puerta.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	puerta.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	puerta.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	puerta.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	puerta.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	puerta.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	puerta.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	puerta.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	puerta.faces.push(new THREE.Face3(0,3,2));
	puerta.faces.push(new THREE.Face3(0,2,1));
  	puerta.faces.push(new THREE.Face3(5,1,2));
	puerta.faces.push(new THREE.Face3(6,1,5));
	puerta.faces.push(new THREE.Face3(7,6,5));
	puerta.faces.push(new THREE.Face3(7,5,4));
	puerta.faces.push(new THREE.Face3(0,7,4));
	puerta.faces.push(new THREE.Face3(0,4,3));  
	puerta.faces.push(new THREE.Face3(7,0,1));  
	puerta.faces.push(new THREE.Face3(6,7,1));
	puerta.faces.push(new THREE.Face3(2,3,4));  
	puerta.faces.push(new THREE.Face3(2,4,5)); 
	puerta.computeFaceNormals(); 
	var materialpuerta=new THREE.MeshPhongMaterial({color:0x934E06});
	var objetopuerta=new THREE.Mesh(puerta,materialpuerta);
	objetopuerta.translateX(5.5);
	objetopuerta.translateY(0);
	objetopuerta.translateZ(-2);
	objetopuerta.rotateY(15);
	objetopuerta.scale.set(7.5,15,0.7);
	const puertatextura= new THREE.TextureLoader().load('img/puerta.png');
	var puertatex=new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xffffff, map:puertatextura})

	);
	puertatex.translateX(5.5);
	puertatex.translateY(8);
	puertatex.translateZ(-2);
	puertatex.rotateY(15);
	puertatex.scale.set(7.6,15.1,0.8);
	var objetopuerta1=new THREE.Mesh(puerta,materialpuerta);
	objetopuerta1.castShadow=true;
	objetopuerta1.receiveShadow=true;
	objetopuerta1.translateX(-3.5);
	objetopuerta1.translateY(0);
	objetopuerta1.translateZ(0);
	objetopuerta1.scale.set(7.5,15,0.7);

	var puertatex1=new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xffffff, map:puertatextura})

	);
	puertatex1.translateX(-3.5);
	puertatex1.translateY(8);
	puertatex1.translateZ(0);
	puertatex1.scale.set(7.6,15.1,0.8);
	///marcopuerta
	var puertamarco=new THREE.Geometry();
	puertamarco.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	puertamarco.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	puertamarco.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	puertamarco.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	puertamarco.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	puertamarco.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	puertamarco.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	puertamarco.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	puertamarco.faces.push(new THREE.Face3(0,3,2));
	puertamarco.faces.push(new THREE.Face3(0,2,1));
  	puertamarco.faces.push(new THREE.Face3(5,1,2));
	puertamarco.faces.push(new THREE.Face3(6,1,5));
	puertamarco.faces.push(new THREE.Face3(7,6,5));
	puertamarco.faces.push(new THREE.Face3(7,5,4));
	puertamarco.faces.push(new THREE.Face3(0,7,4));
	puertamarco.faces.push(new THREE.Face3(0,4,3));  
	puertamarco.faces.push(new THREE.Face3(7,0,1));  
	puertamarco.faces.push(new THREE.Face3(6,7,1));
	puertamarco.faces.push(new THREE.Face3(2,3,4));  
	puertamarco.faces.push(new THREE.Face3(2,4,5));  
	puertamarco.computeFaceNormals();
	var materialpuertamarco=new THREE.MeshPhongMaterial({color:0x542F09});
	var objetopuertamarco=new THREE.Mesh(puertamarco,materialpuertamarco);
	objetopuertamarco.translateX(8.2);
	objetopuertamarco.translateY(0);
	objetopuertamarco.translateZ(0.3);
	objetopuertamarco.scale.set(0.8,15.7,0.8);
	var objetopuertamarco1=new THREE.Mesh(puertamarco,materialpuertamarco);
	objetopuertamarco1.translateX(-7.5);
	objetopuertamarco1.translateY(0);
	objetopuertamarco1.translateZ(0.2);
	objetopuertamarco1.scale.set(0.8,15.7,0.8);
	var objetopuertamarco2=new THREE.Mesh(puertamarco,materialpuertamarco);
	objetopuertamarco2.translateX(0.3);
	objetopuertamarco2.translateY(15);
	objetopuertamarco2.translateZ(0.2);
	objetopuertamarco2.scale.set(16.5,0.9,0.9);
	var grupopuerta=new THREE.Group();
	grupopuerta.add(objetopuerta);
	grupopuerta.add(objetopuerta1);
	grupopuerta.add(objetopuertamarco);
	grupopuerta.add(objetopuertamarco1);
	grupopuerta.add(puertatex);
	grupopuerta.add(puertatex1);
	grupopuerta.add(objetopuertamarco2);
	grupopuerta.scale.set(2,2,1);
	grupopuerta.translateZ(-88);
	grupopuerta.rotation.y=Math.PI;
	
	var tarima=new THREE.Geometry();
	tarima.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	tarima.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	tarima.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	tarima.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	tarima.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	tarima.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	tarima.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	tarima.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	tarima.faces.push(new THREE.Face3(0,3,2));
	tarima.faces.push(new THREE.Face3(0,2,1));
  	tarima.faces.push(new THREE.Face3(5,1,2));
	tarima.faces.push(new THREE.Face3(6,1,5));
	tarima.faces.push(new THREE.Face3(7,6,5));
	tarima.faces.push(new THREE.Face3(7,5,4));
	tarima.faces.push(new THREE.Face3(0,7,4));
	tarima.faces.push(new THREE.Face3(0,4,3));  
	tarima.faces.push(new THREE.Face3(7,0,1));  
	tarima.faces.push(new THREE.Face3(6,7,1));
	tarima.faces.push(new THREE.Face3(2,3,4));  
	tarima.faces.push(new THREE.Face3(2,4,5));  
	tarima.computeFaceNormals();
	var materialtarima=new THREE.MeshPhongMaterial({color:0x934E06});
	var objetotarima=new THREE.Mesh(tarima,materialtarima);
	objetotarima.translateX(-65);
	objetotarima.translateY(0);
	objetotarima.translateZ(-80);
	objetotarima.scale.set(45,8,15);
	var materialtarima1=new THREE.MeshPhongMaterial({color:0x934E06});
	var objetotarima1=new THREE.Mesh(tarima,materialtarima);
	objetotarima1.translateX(65);
	objetotarima1.translateY(0);
	objetotarima1.translateZ(-80);
	objetotarima1.scale.set(45,8,15);
	var piso=new THREE.Geometry();
	piso.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	piso.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	piso.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	piso.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	piso.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	piso.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	piso.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	piso.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	piso.faces.push(new THREE.Face3(0,3,2));
	piso.faces.push(new THREE.Face3(0,2,1));
  	piso.faces.push(new THREE.Face3(5,1,2));
	piso.faces.push(new THREE.Face3(6,1,5));
	piso.faces.push(new THREE.Face3(7,6,5));
	piso.faces.push(new THREE.Face3(7,5,4));
	piso.faces.push(new THREE.Face3(0,7,4));
	piso.faces.push(new THREE.Face3(0,4,3));  
	piso.faces.push(new THREE.Face3(7,0,1));  
	piso.faces.push(new THREE.Face3(6,7,1));
	piso.faces.push(new THREE.Face3(2,3,4));  
	piso.faces.push(new THREE.Face3(2,4,5));  
	piso.computeFaceNormals();
	var materialpiso=new THREE.MeshPhongMaterial({color:0xFFEBCC});
	var objetopiso=new THREE.Mesh(piso,materialpiso);
	objetopiso.translateX(0);
	objetopiso.translateY(0);
	objetopiso.translateZ(0);
	objetopiso.scale.set(500,0.3,500);
	const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
	const pisotextura= new THREE.TextureLoader().load('img/piso.jpg');
	var pisotex=new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xffffff, map:pisotextura})

	);
	//repetir la textura n veces en x z 
	pisotextura.anisotropy = maxAnisotropy;
	pisotextura.wrapS = pisotextura.wrapT = THREE.RepeatWrapping;
	pisotextura.repeat.set( 32, 32 );
	pisotex.castShadow=true;
	pisotex.receiveShadow=true;
	pisotex.translateX(0);
	pisotex.translateY(0.2);
	pisotex.translateZ(0);
	pisotex.scale.set(500,0.3,500);
	var objetopiso1=new THREE.Mesh(piso,materialpiso);
	objetopiso1.translateX(0);
	objetopiso1.translateY(50);
	objetopiso1.translateZ(0);
//falso techo
	//objetopiso1.scale.set(50,0.3,50);

	objetopiso1.scale.set(500,0.3,500);

	var pared=new THREE.Geometry();
	pared.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	pared.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	pared.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	pared.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	pared.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	pared.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	pared.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	pared.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	pared.faces.push(new THREE.Face3(0,3,2));
	pared.faces.push(new THREE.Face3(0,2,1));
  	pared.faces.push(new THREE.Face3(5,1,2));
	pared.faces.push(new THREE.Face3(6,1,5));
	pared.faces.push(new THREE.Face3(7,6,5));
	pared.faces.push(new THREE.Face3(7,5,4));
	pared.faces.push(new THREE.Face3(0,7,4));
	pared.faces.push(new THREE.Face3(0,4,3));  
	pared.faces.push(new THREE.Face3(7,0,1));  
	pared.faces.push(new THREE.Face3(6,7,1));
	pared.faces.push(new THREE.Face3(2,3,4));  
	pared.faces.push(new THREE.Face3(2,4,5));  
	pared.computeFaceNormals();
	var materialpared=new THREE.MeshPhongMaterial({color:0xFFDCA6});
	var objetopared=new THREE.Mesh(pared,materialpared);
	objetopared.translateX(0);
	objetopared.translateY(0);
	objetopared.translateZ(100);
	objetopared.scale.set(500,52,0.4);
	
	var objetopared10=new THREE.Mesh(pared,materialpared);
	objetopared10.translateX(-190);
	objetopared10.translateY(0);
	objetopared10.translateZ(47);
	objetopared10.scale.set(60,52,0.6);

	var objetopared11=new THREE.Mesh(pared,materialpared);
	objetopared11.translateX(-112);
	objetopared11.translateY(0);
	objetopared11.translateZ(47);
	objetopared11.scale.set(20,52,0.6);

	
////////////////////////////////////////////////////////////////

	var objetopared1=new THREE.Mesh(pared,materialpared);
	objetopared1.translateX(-110);
	objetopared1.translateY(0);
    objetopared1.translateZ(-90);
    objetopared1.scale.set(250,52,0.4);
    var objetopared5=new THREE.Mesh(pared,materialpared);
	objetopared5.translateX(60);
	objetopared5.translateY(0);
    objetopared5.translateZ(-100);
    objetopared5.scale.set(112,52,0.4);
    var objetopared6=new THREE.Mesh(pared,materialpared);
	objetopared6.translateX(15);
	objetopared6.translateY(0);
    objetopared6.translateZ(-100);
    objetopared6.scale.set(20,52,0.4);
    objetopared6.rotation.y=Math.PI/2;
	var objetopared2=new THREE.Mesh(pared,materialpared);
	objetopared2.translateX(100);
	objetopared2.translateY(0);
	objetopared2.translateZ(0);
	objetopared2.scale.set(0.4,52,200);

	var objetopared3=new THREE.Mesh(pared,materialpared);
	objetopared3.translateX(-102);/////
	objetopared3.translateY(0);
	objetopared3.translateZ(65);
	objetopared3.scale.set(3,52,90);
//////////////////
	var objetopared7=new THREE.Mesh(pared,materialpared);
	objetopared7.translateX(-102);/////
	objetopared7.translateY(0);
	objetopared7.translateZ(-65);
	objetopared7.scale.set(3,52,90);
	
	var objetopared8=new THREE.Mesh(pared,materialpared);
	objetopared8.translateX(-102);/////
	objetopared8.translateY(45);
	objetopared8.translateZ(0);
	objetopared8.scale.set(3,10,400);
	
	var objetopared9=new THREE.Mesh(pared,materialpared);
	objetopared9.translateX(-215);/////
	objetopared9.translateY(0);
	objetopared9.translateZ(0);
	objetopared9.scale.set(3,52,400);
	
	var grupoparedes=new THREE.Group();
	grupoparedes.add(objetopared3);
	grupoparedes.add(objetopared7);
	grupoparedes.add(objetopared8);
	grupoparedes.rotation.y=Math.PI/2;
	//grupoparedes.scale.set(0.5,0.5,0.5);
	grupoparedes.translateX(200);
	grupoparedes.translateZ(100);
	

	var grupoventana=grupopizarra.clone();
	var grupoventana1=grupopizarra.clone();
	var grupoventana2=grupopizarra.clone();
	var grupoventana3=grupopizarra.clone();
	grupoventana.scale.set(1.5,2.5,2);
	grupoventana.translateX(-39);
	grupoventana.translateY(3);
	grupoventana.translateZ(25);
	grupoventana.rotation.y=Math.PI/2;
	grupoventana1.scale.set(2,2.5,2);
	grupoventana1.translateX(159);
	grupoventana1.translateY(3);
    grupoventana1.translateZ(25);
    grupoventana1.rotation.y=Math.PI/2;
    
	grupoventana2.scale.set(2,2.5,2);
	grupoventana2.translateX(120);
	grupoventana2.translateY(3);
	grupoventana2.translateZ(-14);
	//grupoventana2.rotation.y=Math.PI/2;
	grupoventana3.scale.set(1.5,2.5,2);
	grupoventana3.translateX(159);
	grupoventana3.translateY(3);
	grupoventana3.translateZ(150);
	grupoventana3.rotation.y=Math.PI/2;

	var pilar=new THREE.Geometry();
	pilar.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	pilar.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	pilar.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	pilar.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	pilar.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	pilar.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	pilar.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	pilar.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	pilar.faces.push(new THREE.Face3(0,3,2));
	pilar.faces.push(new THREE.Face3(0,2,1));
  	pilar.faces.push(new THREE.Face3(5,1,2));
	pilar.faces.push(new THREE.Face3(6,1,5));
	pilar.faces.push(new THREE.Face3(7,6,5));
	pilar.faces.push(new THREE.Face3(7,5,4));
	pilar.faces.push(new THREE.Face3(0,7,4));
	pilar.faces.push(new THREE.Face3(0,4,3));  
	pilar.faces.push(new THREE.Face3(7,0,1));  
	pilar.faces.push(new THREE.Face3(6,7,1));
	pilar.faces.push(new THREE.Face3(2,3,4));  
	pilar.faces.push(new THREE.Face3(2,4,5));  
	pilar.computeFaceNormals();
	var materialpilar=new THREE.MeshPhongMaterial({color:0x02589F});
	var objetopilar=new THREE.Mesh(pilar,materialpilar);
	objetopilar.castShadow=true;
	objetopilar.receiveShadow=true;
	objetopilar.translateX(-25);
	objetopilar.translateY(0);
	objetopilar.translateZ(10);
	objetopilar.scale.set(5,50,5);
	var objetopilar1=new THREE.Mesh(pilar,materialpilar);
	objetopilar1.castShadow=true;
	objetopilar1.receiveShadow=true;
	objetopilar1.translateX(25);
	objetopilar1.translateY(0);
	objetopilar1.translateZ(10);
	objetopilar1.scale.set(5,50,5);
	var objetopilar2=new THREE.Mesh(pilar,materialpilar);
	objetopilar2.castShadow=true;
	objetopilar2.receiveShadow=true;
	objetopilar2.translateX(-25);
	objetopilar2.translateY(0);
	objetopilar2.translateZ(40);
	objetopilar2.scale.set(5,50,5);
	var objetopilar3=new THREE.Mesh(pilar,materialpilar);
	objetopilar3.castShadow=true;
	objetopilar3.receiveShadow=true;
	objetopilar3.translateX(25);
	objetopilar3.translateY(0);
	objetopilar3.translateZ(40);
	objetopilar3.scale.set(5,50,5);
	var grupotabla=new THREE.Group();
	grupotabla.add(objetobasemesa);
	grupotabla.add(objetobasemesa1);
	grupotabla.add(objetobasemesa2);
	grupotabla.add(objetobasemesa3);
	grupotabla.add(objetomesa);
	grupotabla.add(objetomesa2);
	grupotabla.add(mesatextex);
	grupotabla.add(mesatextex1);
	
	var grupotabla1=grupotabla.clone();
	var grupotabla2=grupotabla.clone();
	var grupotabla3=grupotabla.clone();
	grupotabla.scale.set(1,1,3);
	grupotabla.translateX(0);
	grupotabla.translateZ(30);
	grupotabla1.scale.set(1,1,3);
	grupotabla1.translateX(0);
	grupotabla1.translateZ(10);
	grupotabla2.scale.set(1,1,3);
	grupotabla2.translateX(0);
	grupotabla2.translateZ(-10);
	grupotabla3.scale.set(1,1,3);
	grupotabla3.translateX(0);
	grupotabla3.translateZ(-30);
	var gruposillatabla=gruposilla.clone();
	var gruposillatabla1=gruposilla.clone();
	var gruposillatabla2=gruposilla.clone();
	var gruposillatabla3=gruposilla.clone();
	var gruposillatabla4=gruposilla.clone();
	var gruposillatabla5=gruposilla.clone();
	var gruposillatabla6=gruposilla.clone();
	var gruposillatabla7=gruposilla.clone();
	var gruposillatabla8=gruposilla.clone();
	var gruposillatabla9=gruposilla.clone();

	gruposillatabla2.translateX(8);
	gruposillatabla2.translateZ(0);
	gruposillatabla3.translateX(8);
	gruposillatabla3.translateZ(10);
	gruposillatabla4.translateX(8);
	gruposillatabla4.translateZ(20);
	gruposillatabla5.translateX(8);
	gruposillatabla5.translateZ(30);

	gruposillatabla2.rotation.y=Math.PI/2;
	gruposillatabla3.rotation.y=Math.PI/4;
	gruposillatabla4.rotation.y=Math.PI/2;
	gruposillatabla5.rotation.y=Math.PI/4;
    var mesasdebiblioteca=new THREE.Group();
    mesasdebiblioteca.add(gruposillatabla2);
    mesasdebiblioteca.add(gruposillatabla3);
    mesasdebiblioteca.add(gruposillatabla4);
    mesasdebiblioteca.add(gruposillatabla5);
    mesasdebiblioteca.add(grupotabla);
    mesasdebiblioteca.add(grupotabla1);
    var mesasdebiblioteca1=mesasdebiblioteca.clone();
    var mesasdebiblioteca2=mesasdebiblioteca.clone();
    mesasdebiblioteca.translateX(-25);
    mesasdebiblioteca2.translateX(25);
    var grupomesas=new THREE.Group();
    grupomesas.add(mesasdebiblioteca);
    grupomesas.add(mesasdebiblioteca1);
    grupomesas.add(mesasdebiblioteca2);
    var grupomesas1=grupomesas.clone();
    var grupomesas2=grupomesas.clone();
    var grupomesas3=grupomesas.clone();
    var grupomesas4=grupomesas.clone();
    var grupomesas5=grupomesas.clone();
    grupomesas4.translateX(55);
    grupomesas4.translateZ(-105);
    grupomesas5.translateX(55);
    grupomesas5.translateZ(-55);
    grupomesas.translateX(55);
    grupomesas.translateZ(-105);
    grupomesas1.translateX(55);
    grupomesas1.translateZ(-55);
    grupomesas2.translateX(55);
    grupomesas2.translateZ(-5);
    grupomesas3.translateX(55);
    grupomesas3.translateZ(-25);
    var grupogrande=new THREE.Group();
    grupogrande.add(grupomesas4);
    grupogrande.add(grupomesas5);
    grupogrande.add(grupomesas3);
    grupogrande.rotation.y=Math.PI+Math.PI/2;
    grupogrande.translateX(30);
    grupogrande.translateZ(85);
	var tarimagrande=new THREE.Geometry();
	tarimagrande.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	tarimagrande.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	tarimagrande.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	tarimagrande.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	tarimagrande.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	tarimagrande.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	tarimagrande.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	tarimagrande.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	tarimagrande.faces.push(new THREE.Face3(0,3,2));
	tarimagrande.faces.push(new THREE.Face3(0,2,1));
  	tarimagrande.faces.push(new THREE.Face3(5,1,2));
	tarimagrande.faces.push(new THREE.Face3(6,1,5));
	tarimagrande.faces.push(new THREE.Face3(7,6,5));
	tarimagrande.faces.push(new THREE.Face3(7,5,4));
	tarimagrande.faces.push(new THREE.Face3(0,7,4));
	tarimagrande.faces.push(new THREE.Face3(0,4,3));  
	tarimagrande.faces.push(new THREE.Face3(7,0,1));  
	tarimagrande.faces.push(new THREE.Face3(6,7,1));
	tarimagrande.faces.push(new THREE.Face3(2,3,4));  
	tarimagrande.faces.push(new THREE.Face3(2,4,5));
	tarimagrande.computeFaceNormals();
	var materialtarimagrande=new THREE.MeshPhongMaterial({color:0x8C3E17});
	var objetotarimagrande=new THREE.Mesh(tarimagrande,materialtarimagrande);
	objetotarimagrande.translateX(75);
	objetotarimagrande.translateY(0);
	objetotarimagrande.translateZ(70);
	objetotarimagrande.scale.set(110,9.5,70);
	//const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
	const tarimagrantextura= new THREE.TextureLoader().load('img/pisobiblio.jpg');
	var tarimagrantex=new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xffffff, map:tarimagrantextura})

	);

	//repetir la textura n veces en x z 
	tarimagrantextura.anisotropy = maxAnisotropy;
	tarimagrantextura.wrapS = tarimagrantextura.wrapT = THREE.RepeatWrapping;
	tarimagrantextura.repeat.set( 4, 4 );
	tarimagrantex.castShadow=true;
	tarimagrantex.receiveShadow=true;
	tarimagrantex.translateX(75);
	tarimagrantex.translateY(5);
	tarimagrantex.translateZ(70);
	tarimagrantex.scale.set(110.3,9.8,70.3);

    var objetotarimagrande1=new THREE.Mesh(tarimagrande,materialtarimagrande);
	objetotarimagrande1.translateX(23);
	objetotarimagrande1.translateY(0);
	objetotarimagrande1.translateZ(40);
	objetotarimagrande1.scale.set(20,3,10);
	var tarimagrantex1=new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xffffff, map:tarimagrantextura})

	);
	tarimagrantex1.translateX(23);
	tarimagrantex1.translateY(1.5);
	tarimagrantex1.translateZ(40);
	tarimagrantex1.scale.set(20.2,3.2,10.2);
    var objetotarimagrande2=new THREE.Mesh(tarimagrande,materialtarimagrande);
	objetotarimagrande2.translateX(23+3);
	objetotarimagrande2.translateY(3);
	objetotarimagrande2.translateZ(40);
	objetotarimagrande2.scale.set(20,3,10);
	var tarimagrantex2=new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xffffff, map:tarimagrantextura})

	);
	tarimagrantex2.translateX(23+3);
	tarimagrantex2.translateY(4.5);
	tarimagrantex2.translateZ(40);
	tarimagrantex2.scale.set(20.2,3.2,10.2);
    
    var mesagrande=new THREE.Geometry();
	mesagrande.vertices.push(new THREE.Vector3(0.8,2,0.5));//0
	mesagrande.vertices.push(new THREE.Vector3(0.8,2,-0.5));//1
	mesagrande.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	mesagrande.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	mesagrande.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	mesagrande.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	mesagrande.vertices.push(new THREE.Vector3(-0.5,2,-0.5));//6
	mesagrande.vertices.push(new THREE.Vector3(-0.5,2,0.5));//7
	mesagrande.faces.push(new THREE.Face3(0,3,2));
	mesagrande.faces.push(new THREE.Face3(0,2,1));
  	mesagrande.faces.push(new THREE.Face3(5,1,2));
	mesagrande.faces.push(new THREE.Face3(6,1,5));
	mesagrande.faces.push(new THREE.Face3(7,6,5));
	mesagrande.faces.push(new THREE.Face3(7,5,4));
	mesagrande.faces.push(new THREE.Face3(0,7,4));
	mesagrande.faces.push(new THREE.Face3(0,4,3));  
	mesagrande.faces.push(new THREE.Face3(7,0,1));  
	mesagrande.faces.push(new THREE.Face3(6,7,1));
	mesagrande.faces.push(new THREE.Face3(2,3,4));  
	mesagrande.faces.push(new THREE.Face3(2,4,5));
	mesagrande.computeFaceNormals();
	var materialmesagrande=new THREE.MeshPhongMaterial({color:0x8C3E17});
	var objetomesagrande=new THREE.Mesh(mesagrande,materialmesagrande);
	objetomesagrande.translateX(-70);
	objetomesagrande.translateY(0);
	objetomesagrande.translateZ(0);
	objetomesagrande.scale.set(10,5,50);
	const mesagrandetextura= new THREE.TextureLoader().load('img/madera.jpg');
	var mesagrandetex=new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xffffff, map:mesagrandetextura})

	);
	mesagrandetex.castShadow=true;
	mesagrandetex.receiveShadow=true;
	mesagrandetex.translateX(-70);
	mesagrandetex.translateY(0);
	mesagrandetex.translateZ(0);
	mesagrandetex.scale.set(10.1,5.1,50.1);

    var mesagrande1=new THREE.Geometry();
	mesagrande1.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	mesagrande1.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	mesagrande1.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	mesagrande1.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	mesagrande1.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	mesagrande1.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	mesagrande1.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	mesagrande1.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	mesagrande1.faces.push(new THREE.Face3(0,3,2));
	mesagrande1.faces.push(new THREE.Face3(0,2,1));
  	mesagrande1.faces.push(new THREE.Face3(5,1,2));
	mesagrande1.faces.push(new THREE.Face3(6,1,5));
	mesagrande1.faces.push(new THREE.Face3(7,6,5));
	mesagrande1.faces.push(new THREE.Face3(7,5,4));
	mesagrande1.faces.push(new THREE.Face3(0,7,4));
	mesagrande1.faces.push(new THREE.Face3(0,4,3));  
	mesagrande1.faces.push(new THREE.Face3(7,0,1));  
	mesagrande1.faces.push(new THREE.Face3(6,7,1));
	mesagrande1.faces.push(new THREE.Face3(2,3,4));  
	mesagrande1.faces.push(new THREE.Face3(2,4,5));
	mesagrande1.computeFaceNormals();
	var materialmesagrande1=new THREE.MeshPhongMaterial({color:0x8C3E17});
	var objetomesagrande1=new THREE.Mesh(mesagrande1,materialmesagrande1);
	objetomesagrande1.translateX(-66);
	objetomesagrande1.translateY(10);
	objetomesagrande1.translateZ(0);
	objetomesagrande1.scale.set(8,3.8,50);
	var mesagrandetex1=new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xffffff, map:mesagrandetextura})

	);
	mesagrandetex1.castShadow=true;
	mesagrandetex1.receiveShadow=true;
	mesagrandetex1.translateX(-66);
	mesagrandetex1.translateY(15);
	mesagrandetex1.translateZ(0);
	mesagrandetex1.scale.set(8.1,3.9,50.1);
    var grupomesagrande=new THREE.Group();
    grupomesagrande.add(objetomesagrande);
	grupomesagrande.add(objetomesagrande1);
	grupomesagrande.add(mesagrandetex);
	grupomesagrande.add(mesagrandetex1);	
    var grupomesagrande1=grupomesagrande.clone();
    var grupomesagrande2=grupomesagrande.clone();
    grupomesagrande1.rotation.y=Math.PI+Math.PI/2;
	grupomesagrande2.rotation.y=Math.PI/2;
	grupomesagrande1.scale.set(1,1,0.7);
    grupomesagrande1.translateX(90);
    grupomesagrande2.translateX(90);
    grupomesagrande1.translateZ(82);
	grupomesagrande2.translateZ(-82);
	grupomesagrande2.scale.set(1,1,0.7);
    var grupotabla5=grupotabla.clone();
    var grupotabla6=grupotabla.clone();
    //var grupotabla7=grupotabla.clone();
    grupotabla5.translateX(-10);
    grupotabla6.translateX(10);
    grupotabla5.rotation.y=Math.PI/2;
    grupotabla6.rotation.y=Math.PI/2;
    var grupotablasuperior=new THREE.Group();
    grupotablasuperior.add(grupotabla5);
    grupotablasuperior.add(grupotabla6);
    grupotablasuperior.translateY(8);
    grupotablasuperior.translateX(50);
    grupotablasuperior.translateZ(15);
    var grupotablasuperior1=grupotablasuperior.clone();
    var grupotablasuperior2=grupotablasuperior.clone();
	grupotablasuperior1.translateZ(35);
	grupotablasuperior1.scale.set(0.5,1,1);
    grupotablasuperior2.rotation.y=Math.PI/2;
    grupotablasuperior2.translateX(-46);
	grupotablasuperior2.translateZ(10);
	grupotablasuperior2.scale.set(0.5,1,1);

    var pilarbiblio=new THREE.Geometry();
	pilarbiblio.vertices.push(new THREE.Vector3(0.5,1,0.5));//0
	pilarbiblio.vertices.push(new THREE.Vector3(0.5,1,-0.5));//1
	pilarbiblio.vertices.push(new THREE.Vector3(0.5,0,-0.5));//2
	pilarbiblio.vertices.push(new THREE.Vector3(0.5,0,0.5));//3
	pilarbiblio.vertices.push(new THREE.Vector3(-0.5,0,0.5));//4
	pilarbiblio.vertices.push(new THREE.Vector3(-0.5,0,-0.5));//5
	pilarbiblio.vertices.push(new THREE.Vector3(-0.5,1,-0.5));//6
	pilarbiblio.vertices.push(new THREE.Vector3(-0.5,1,0.5));//7
	pilarbiblio.faces.push(new THREE.Face3(0,3,2));
	pilarbiblio.faces.push(new THREE.Face3(0,2,1));
  	pilarbiblio.faces.push(new THREE.Face3(5,1,2));
	pilarbiblio.faces.push(new THREE.Face3(6,1,5));
	pilarbiblio.faces.push(new THREE.Face3(7,6,5));
	pilarbiblio.faces.push(new THREE.Face3(7,5,4));
	pilarbiblio.faces.push(new THREE.Face3(0,7,4));
	pilarbiblio.faces.push(new THREE.Face3(0,4,3));  
	pilarbiblio.faces.push(new THREE.Face3(7,0,1));  
	pilarbiblio.faces.push(new THREE.Face3(6,7,1));
	pilarbiblio.faces.push(new THREE.Face3(2,3,4));  
	pilarbiblio.faces.push(new THREE.Face3(2,4,5));
	pilarbiblio.computeFaceNormals();
	var materialpilarbiblio=new THREE.MeshPhongMaterial({color:0xFFDCA6});
    var objetopilarbiblio=new THREE.Mesh(pilarbiblio,materialpilarbiblio);
    var objetopilarbiblio1=new THREE.Mesh(pilarbiblio, materialpilarbiblio);
	objetopilarbiblio.translateX(18);
	objetopilarbiblio.translateY(0);
	objetopilarbiblio.translateZ(15);
    objetopilarbiblio.scale.set(7,60,7);
    objetopilarbiblio1.translateX(18);
	objetopilarbiblio1.translateY(0);
	objetopilarbiblio1.translateZ(-50);
	objetopilarbiblio1.scale.set(8,60,8);

	const librotextura= new THREE.TextureLoader().load('img/librofila.jpg');
	var librotex=new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xffffff, map:librotextura})

	);
	librotex.translateX(3.5);
	librotex.translateY(1.5);
	librotex.translateZ(0);
	librotex.scale.set(6.5,2.5,3);

	const librotextura1= new THREE.TextureLoader().load('img/librofila2.jpg');
	var librotex1=new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xffffff, map:librotextura1})

	);
	librotex1.translateX(-3.5);
	librotex1.translateY(1.5);
	librotex1.translateZ(0);
	librotex1.scale.set(6.5,2.5,3);
	var apoyolibro=new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshPhongMaterial({color: 0x7B513C}));
	apoyolibro.castShadow=true;
	apoyolibro.receiveShadow=true;
	apoyolibro.translateX(0);
	apoyolibro.translateY(0);
	apoyolibro.translateZ(0);
	apoyolibro.scale.set(15,0.5,3.2);
	var apoyolibro1=new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshPhongMaterial({color: 0x7B513C}));
	apoyolibro1.castShadow=true;
	apoyolibro1.receiveShadow=true;
	apoyolibro1.translateX(0);
	apoyolibro1.translateY(3.5);
	apoyolibro1.translateZ(0);
	apoyolibro1.scale.set(15,0.5,3.2);
	var apoyolibro2=new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshPhongMaterial({color: 0x7B513C}));
	apoyolibro2.castShadow=true;
	apoyolibro2.receiveShadow=true;
	apoyolibro2.translateX(0);
	apoyolibro2.translateY(1.75);
	apoyolibro2.translateZ(0);
	apoyolibro2.scale.set(0.5,4,3.2);
	var apoyolibro3=new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshPhongMaterial({color: 0x7B513C}));
	apoyolibro3.castShadow=true;
	apoyolibro3.receiveShadow=true;
	apoyolibro3.translateX(7.5);
	apoyolibro3.translateY(1.75);
	apoyolibro3.translateZ(0);
	apoyolibro3.scale.set(0.5,4,3.2);
	var apoyolibro4=new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshPhongMaterial({color: 0x7B513C}));
	apoyolibro4.castShadow=true;
	apoyolibro4.receiveShadow=true;
	apoyolibro4.translateX(-7.5);
	apoyolibro4.translateY(1.75);
	apoyolibro4.translateZ(0);
	apoyolibro4.scale.set(0.5,4,3.2);
	var apoyolibro5=new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshPhongMaterial({color: 0x7B513C}));
	apoyolibro5.castShadow=true;
	apoyolibro5.receiveShadow=true;
	apoyolibro5.translateX(0);
	apoyolibro5.translateY(1.75);
	apoyolibro5.translateZ(1.5);
	apoyolibro5.scale.set(15,4,0.3);
	var grupopartelibrero=new THREE.Group();
	grupopartelibrero.add(librotex);
	grupopartelibrero.add(librotex1);
	grupopartelibrero.add(apoyolibro);
	grupopartelibrero.add(apoyolibro1);
	grupopartelibrero.add(apoyolibro2);
	grupopartelibrero.add(apoyolibro3);
	grupopartelibrero.add(apoyolibro4);
	grupopartelibrero.add(apoyolibro5);
	var grupopartelibrero2=grupopartelibrero.clone();
	grupopartelibrero2.translateY(3.5);
	var grupopartelibrero3=grupopartelibrero.clone();
	grupopartelibrero3.translateY(7);
	var grupopartelibrero4=grupopartelibrero.clone();
	grupopartelibrero4.translateY(10.5);

	var bibliotecario=new THREE.Group();
	bibliotecario.add(grupopartelibrero);
	bibliotecario.add(grupopartelibrero2);
	bibliotecario.translateX(0);
	bibliotecario.translateZ(0);
	//bibliotecario.rotation.y=Math.PI/2;

	var grupobibliotecamenor=new THREE.Group();
	grupobibliotecamenor.add(grupopartelibrero);
	grupobibliotecamenor.add(grupopartelibrero2);
	grupobibliotecamenor.add(grupopartelibrero3);
	grupobibliotecamenor.add(grupopartelibrero4);
	///////////////
	var grupobibliotecamenor2=grupobibliotecamenor.clone();
	grupobibliotecamenor2.rotation.y=Math.PI;
	grupobibliotecamenor.translateZ(0);
	grupobibliotecamenor2.translateZ(-3.5);
	var grupobibliotecagrande=new THREE.Group();
	grupobibliotecagrande.add(grupobibliotecamenor);
	grupobibliotecagrande.add(grupobibliotecamenor2);
	var grupobibliotecagrande2=grupobibliotecagrande.clone();
	grupobibliotecagrande.translateX(7);
	grupobibliotecagrande2.translateX(-7);
	var grupobiblioteca=new THREE.Group();
	grupobiblioteca.add(grupobibliotecagrande);
	grupobiblioteca.add(grupobibliotecagrande2);
	var grupobiblioteca2=grupobiblioteca.clone();
	var grupobiblioteca3=grupobiblioteca.clone();
	
	grupobiblioteca.translateZ(10);
	grupobiblioteca2.translateZ(-10);
	grupobiblioteca3.translateZ(-30);

	var grupobibliotecaalrededor=grupobibliotecagrande.clone();
	var grupobibliotecaalrededor1=grupobibliotecagrande.clone();
	var grupobibliotecaalrededor2=grupobibliotecagrande.clone();
	grupobibliotecaalrededor.rotation.y=Math.PI/2;
	grupobibliotecaalrededor1.rotation.y=Math.PI/2;
	grupobibliotecaalrededor2.rotation.y=Math.PI/2;
	grupobibliotecaalrededor.translateX(-10);
	grupobibliotecaalrededor.translateZ(-36);
	grupobibliotecaalrededor1.translateX(7);
	grupobibliotecaalrededor1.translateZ(-36);
	grupobibliotecaalrededor2.translateX(24);
	grupobibliotecaalrededor2.translateZ(-36);
	
	var grupofinalbiblio= new THREE.Group();
	grupofinalbiblio.add(grupobiblioteca);
	grupofinalbiblio.add(grupobiblioteca2);
	grupofinalbiblio.add(grupobiblioteca3);
	grupofinalbiblio.add(grupobibliotecaalrededor);
	grupofinalbiblio.add(grupobibliotecaalrededor1);
	grupofinalbiblio.add(grupobibliotecaalrededor2);
	grupofinalbiblio.translateY(0.5);
	grupofinalbiblio.translateX(-150);
	grupofinalbiblio.scale.set(2,2,2);

	
	var grupolabobiblio=grupobibliotecas.clone();

	grupolabobiblio.translateX(0);
	grupolabobiblio.translateZ(0);
	grupolabobiblio.scale.set(2,2,2);

    // Carga de objetos a Escena Render
	scene = new THREE.Scene();
	scene.add(light);
	scene.add(light2);
	//scene.add(light3);
	//scene.add(light4);
	scene.add(ambientLight);
	scene.add(grupopuerta);
	scene.add(grupofinalbiblio);
	//expandir modelo scene.add(objetotarima);
	//scene.add(objetotarima1);
	scene.add(objetopiso);
	scene.add(objetopiso1);
    scene.add(objetopared);
    scene.add(objetotarimagrande);
    scene.add(objetopared1);
    scene.add(objetopared5);
    scene.add(objetopared6);
	scene.add(objetopared2);
	scene.add(objetopared7);
	scene.add(objetopared8);
	scene.add(objetopared9);
	scene.add(objetopared10);
	scene.add(objetopared11);
	scene.add(grupolabobiblio);
	scene.add(pisotex);
	scene.add(objetopared3);
    scene.add(grupoventana);
    scene.add(grupoventana1);
    scene.add(grupoventana2);
	scene.add(grupomesas);
	scene.add(grupoparedes);
    scene.add(grupomesas1);
    scene.add(grupomesas2);
    scene.add(grupogrande);
    scene.add(objetotarimagrande1);	
	scene.add(objetotarimagrande2);	
	scene.add(tarimagrantex);
	scene.add(tarimagrantex1);
	scene.add(tarimagrantex2);
    scene.add(grupomesagrande);
    scene.add(grupomesagrande1);
    scene.add(grupomesagrande2);
    scene.add(grupotablasuperior);
	scene.add(bibliotecario);
	scene.add(grupotablasuperior1);
    scene.add(grupotablasuperior2);
    scene.add(objetopilarbiblio);
	scene.add(objetopilarbiblio1);
	scene.add(grupobibliotecas);

		
}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport);
}
