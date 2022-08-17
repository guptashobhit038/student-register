<template>
  <div>
    <h3> Student Report</h3>
    <input type="text" placeholder="Name" v-model="a">
    <input type="number" placeholder="Class" v-model="b">
    <input type="text" placeholder="Subjects" v-model="c">
    <input type="number" placeholder="RollNo" v-model="d"><br>
    <button @click="add ()">Add Students</button>
    <button @click="Delete ()">Delete All</button>
    <div class="main">
      <div class="parent">
        <div class="box" v-for="(i , a) in addlist" :key="i.index">
          Name:{{i.name}}<br>
          Subjects:{{i.subjects}}<br>
          rollNo:{{i.rollNo}}<br>
          class:{{i.class}} <br>
          <button @click="remove (a) ">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="C:\Users\LENOVO\Desktop\basic_project\src\views\js\homeView.js">
</script>
<style>
.parent{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap ;
    width: 80%;
  }
  .main{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* flex-wrap: wrap ; */
  }
  .box{
    height: 10rem;
    width: 10rem;
    border: 5px red solid;
    margin: 10px;
    background-color: greenyellow;
    box-sizing: border-box;
    font-family: fantasy;
    font-size: larger;
}
  h3{
    font-size: x-large;
    font-weight: bolder;
    font-family: sans-serif;
}
  #app{
    background-color: bisque;
  }
</style>
