<template>
  <div id="app">
      <div clas="wrap">
        
        <div class="title">
          <h1>DOT <br>GRAPH</h1>
        </div>
       
       <div class="graph">
          <canvas id="canvas" width="500" height="500"></canvas>
          <span>{{ exampleContent }}</span>
            <div class="Btn">
                <input type="text" name="x" id="getX" v-model="exampleContent">
                <input type="text" name="y" id="getY" v-model="exampleContent">
                <button>Get Position</button>
                <!-- <script src="./app.js"></script> -->
            </div>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exampleContent:'',
      exampleContentX: '',
      exampleContentY: ''
    }
  }
}
</script>

<style>
    body {
      margin: 0 auto;
    }
    #app{
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      
      padding: 1px;
      padding-bottom: 182px;

      margin-top: 0px;
      
      text-align: center;
      color: #2c3e50;
      

      background-color: rgb(39, 39, 39);
    }

    #warp{
      display: inline;
      
      width: 1200px;
      height: 800px;

      margin: 0 auto;
    }

    h1{
      margin-top: 90px;
      margin-bottom: 80px;

      color: rgb(255, 255, 255);
      
      line-height: 130px;
      font-size: 10em;
    }

    input {
      padding: 10px;
      margin-left: 6px;
      
      border: none;
      border-radius: 7px;

      color: white;
      font-size: 13.7px;

      background-color: rgb(54, 54, 54);
    }
    input:hover {
      background-color: rgb(70, 70, 70);

      transition: 0.3s ease-in-out;
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }

    button {
      margin-left: 20px;
      padding: 10px 8px;

      border: none;
      border-radius: 10px;

      background-color: rgb(192, 192, 192);
    }
    button:hover {
      background-color: rgb(180, 180, 180);
      transition: 0.3s ease-in-out;

      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }


    canvas {
      margin-bottom: 20px;

      background-color: rgb(48, 48, 48);
      
      border-radius: 20px;
    }
    canvas:hover {
      transition: 0.2s ease-in-out;
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }

</style>
