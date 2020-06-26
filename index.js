console.log('Hi there!');
var mainData;
const input = document.getElementById('inputOne')
var para = document.createElement('p');
const img  = document.createElement('img')
const Api = 'http://www.omdbapi.com/?apikey=39fd213b&s=';

async function submit(value) {
  console.log(value);
  let  URL = `${Api}${value}`;
  console.log(URL)
  let result = await fetch(URL);
  let response = await result.json();
   if(response.Error) return mainData=[]  
   mainData = response.Search
  return mainData
 
}

const debounce =(func,delay)=>{
  let timeoutId;
  return (...args)=>{
    timeoutId && clearTimeout(timeoutId)
    timeoutId = setTimeout(()=>{
      func.apply(null,args)
    },delay)
  }
}

const onInput = async (e)=>{ 
     const movies = await submit(e.target.value);
     console.log(movies)
     movies.map(data =>{
       const link = document.createElement('a');
        const main =`<img src='${data.Poster}'/>
        <h1>${data.Title}</h1>
        `
        link.appendChild(main)
        document.getElementById('target').appendChild(link)
     })
}

async function Selected(id){
    let URL = `${Api}${i}`;
    let result = await fetch(URL);
  let response = await result.json();
    mainData = response
    console.log(mainData)
    mainData ===undefined? console.log('not found'):(para.innerText=mainData.Title, apiContainer.appendChild(para))
 

}

onClick = (id)=>{
  Selected(id)
}




  input.addEventListener('input',debounce(onInput,500))


  
  // mainData.forEach(data =>(
  //      console.debug(para),
     
  //     console.log(para),
      
  //  ))
//submit();
