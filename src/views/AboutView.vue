 <template>
  <div>
    <button @click="clickMe">click Me</button>
    <div>{{show}}</div>
    <div v-if="show">HelloWorld</div>
    <div v-else>How are you</div>
    <div>0</div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data () {
    return {
      show: 1
    }
  },
  methods: {
    clickMe () {
      this.show = this.show + 1
    }

  }
}
</script>

<style>

</style>
<!-- <template>
  <div>
    <button v-for="i in 10" :key="i" @click="buttonClicked(i)">{{i-1}}</button>
    <div>{{y}}</div>
    <div @click="deleteLastNumber" class="clearButton" style="border : 5px solid blue;">clear</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      y: '+91'

    }
  },
  methods: {
    buttonClicked (a) {
      this.y = this.y + (a - 1)
    },
    deleteLastNumber () {
      this.y = this.y.slice(0, -1)
    }
  }

}
</script>

<style>

</style>
 -->
<!-- <template>
  <div>
    <input type="number" placeholder="Enter First Number" v-model=a>
    <input type="number" placeholder="Enter Second Number" v-model=b> <br>
    <button @click="complete(a,b,'+')">Plus</button>
    <button @click="complete(a,b,'-')">Subtract</button>
    <button @click="complete(a,b,'/')">Divide</button>
    <button @click="complete(a,b,'*')">Multiply</button>
    <div>{{temp}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      temp: 0
    }
  },
  methods: {
    complete (a, b, c) {
      if (c === '+') {
        this.temp = parseInt(a) + parseInt(b)
      } else if (c === '-') {
        this.temp = a - b
      } else if (c === '*') {
        this.temp = a * b
      } else if (c === '/') {
        this.temp = a / b
      }
    }
  }
}
</script>

<style>
</style> -->

<!-- <template>
  <div>
    <div v-for="i in school" :key="i">
      name: {{i.name}} <br /> class: {{i.class}}
      <div v-for="j in i.subjects" :key='j'>{{j}}</div>
    <div>rollNo: {{i.rollNo}}</div>
    </div>
  <input type="text" placeholder="Enter the subjects" v-model="a"> <br>
  <button @click="one_obj(a)">first subjects</button>
  <button @click="second_obj(a)">second subjects</button>
  <button @click="delete_obj()">Delete</button>
  <button @click="delete_obj1()">Delete 1</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      school: [{
        name: 'shobhit',
        class: 10,
        subjects: ['vue', 'javascript'],
        rollNo: 15

      }, {
        name: 'Adarsh',
        class: 12,
        subjects: ['vue.js', 'java'],
        rollNo: 21

      }]
    }
  },
  methods: {
    second_obj (c) {
      this.school[1].subjects = this.school[1].subjects.concat(c)
    },
    one_obj (c) {
      this.school[0].subjects = this.school[0].subjects.concat(c)
      console.log(this.school[0].subjects)
    },
    delete_obj () {
      this.school[0].subjects = this.school[0].subjects.slice(0, this.school[0].subjects.length - 1)
    },
    delete_obj1 () {
      this.school[1].subjects = this.school[1].subjects.slice(0, this.school[1].subjects.length - 1)
    }
  }
}
</script>

<style>

</style>
 -->
<!-- <template>
  <div>
    <h3> Student Register</h3>
    <button @click="add ()">Add Students</button>
      <input type="checkbox" id="switch" @click="show = !show">
        <label for="switch"></label>
    <button @click="removeAll ()">deleteAll</button>
  <div v-if="show">
    <div>
      <input type="name" placeholder="Enter your name" v-model="a">
      <input type="number" placeholder="Enter your class" v-model="b">
      <input type="name" placeholder="Enter your subjects" v-model="c">
      <input type="number" placeholder="Enter your roll No" v-model="d"> <br>
    <div class= "parent">
      <div class="box" v-for="(i, index) in addlist" :key="i.index">
        Name:{{i.name}}<br>
        Subjects:{{i.subjects}}<br>
        rollNo:{{i.rollNo}}<br>
        class:{{i.class}}
        <div>
          <button @click="remove(i, index)">delete</button>
        </div>
      </div>
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
  }
  .box{
    height: 10rem;
    width: 10rem;
    border: 5px red solid;
    margin: 10px;
}

div label{
  display: inline-block;
  position: relative;
  width:4rem;
  height:1.5rem;
  background: grey;
  border-radius: 20px;
  margin: 1rem;
}
div label:before{
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  display: block;
  height:1.2rem;
  width: 2rem;
  background:white;
  border-radius: 40% ;
}
input:checked + label:before{
  left: 30px;
}
</style> -->
