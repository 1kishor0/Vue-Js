new Vue({

    el: '#app',
    data:{
        title: "Sample",
        isItTrue: true,
        cars:['Ford', 'Toyota'],
        robot:{
            name: 'Bird',
            age: 20
        },
        greeting:()=>{
            return "Hello World";
        }
    }
});