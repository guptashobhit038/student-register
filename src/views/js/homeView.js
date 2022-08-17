export default {
  data () {
    return {
      a: '',
      b: '',
      c: '',
      d: '',
      addlist: [
        {
          name: 'shobhit',
          rollNo: 1,
          subjects: 'java',
          class: 12
        },
        {
          name: 'adarsh',
          rollNo: 2,
          subjects: 'python',
          class: 12
        },
        {
          name: 'aditya',
          rollNo: 3,
          subjects: 'sql',
          class: 12
        },
        {
          name: 'shobhit',
          rollNo: 4,
          subjects: 'java',
          class: 12

        },
        {
          name: 'adarsh',
          rollNo: 5,
          subjects: 'python',
          class: 12
        },
        {
          name: 'aditya',
          rollNo: 6,
          subjects: 'sql',
          class: 12
        },
        {
          name: 'shobhit',
          rollNo: 7,
          subjects: 'java',
          class: 12

        },
        {
          name: 'adarsh',
          rollNo: 8,
          subjects: 'python',
          class: 12
        },
        {
          name: 'aditya',
          rollNo: 9,
          subjects: 'sql',
          class: 12
        }
      ]
    }
  },
  methods: {
    add () {
      const y = {
        name: this.a,
        class: this.b,
        subjects: this.c,
        rollNo: this.d
      }
      this.addlist.push(y)
    },
    Delete () {
      debugger
      const arrOfLength = this.addlist.length
      for (let i = 0; i < arrOfLength; i++) {
        this.addlist.pop()
      }
    //   for (let i = 2; i < this.addlist.length; i += 2) {
    // this.addlist.splice(i, 1)
    //   }
    },
    remove (index) {
      this.addlist.splice(index, 1)
    }
  }
}
// export default {
//   data () {
//     return {
//       a: '',
//       b: '',
//       c: '',
//       d: '',
//       addlist: [
//         {
//           name: 'shobhit',
//           rollNo: 1,
//           subjects: 'java',
//           class: 12

//         },
//         {
//           name: 'adarsh',
//           rollNo: 2,
//           subjects: 'python',
//           class: 12
//         },
//         {
//           name: 'aditya',
//           rollNo: 3,
//           subjects: 'sql',
//           class: 12
//         },
//         {
//           name: 'shobhit',
//           rollNo: 4,
//           subjects: 'java',
//           class: 12

//         },
//         {
//           name: 'adarsh',
//           rollNo: 5,
//           subjects: 'python',
//           class: 12
//         },
//         {
//           name: 'aditya',
//           rollNo: 6,
//           subjects: 'sql',
//           class: 12
//         },
//         {
//           name: 'shobhit',
//           rollNo: 7,
//           subjects: 'java',
//           class: 12

//         },
//         {
//           name: 'adarsh',
//           rollNo: 8,
//           subjects: 'python',
//           class: 12
//         },
//         {
//           name: 'aditya',
//           rollNo: 9,
//           subjects: 'sql',
//           class: 12
//         }
//       ],
//       show: true
//     }
//   },
//   methods: {
//     add () {
//       const x = {
//         name: this.a,
//         subjects: this.c,
//         rollNo: this.d,
//         class: this.b
//       }
//       this.addlist.push(x)
//     },
//     removeAll () {
//     //   let i = 0
//     //   for (i = 0; i < this.addlist.length; i++) {
//     //     this.addlist.p()
//     //   }
//     //   for (let i = 0; i < this.addlist.length; i++) {
//     //     this.addlist.splice(i, 1)
//     //   }
//       const lengthOfArray = this.addlist.length
//       for (let i = 0; i < lengthOfArray; i++) {
//         this.addlist.pop()
//       }
//     },
//     remove (a, b) {
//       console.log(this.addlist.indexOf(a))
//       console.log('index' + b)
//     }
//   }
// }
