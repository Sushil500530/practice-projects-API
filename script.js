const loadContainer = async(some)=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/ai/tools`) ;
    const getData = await response.json();
    // console.log(getData.data)
    const get = getData.data
    // console.log(get)
    get.tools.forEach((element) => {
    // console.log(element)
        const showContainer = document.getElementById('show-container')
        const div = document.createElement('div') ;
        div.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
        <figure><img src="${element?.image}" alt="photo" /></figure>
        <div class="card-body">
            <h2 class="card-title">${element?.name}</h2>
            <ol>
              <li>1.Natural language processing</li>
              <li>2.Contextual understanding</li>
              <li>3.Text generation</li>
          </ol>
          <hr class= "text-center border-1 my-4">
            <div class="card-actions justify-between ">
                <div>
                 <h2 class="card-title">${element?.name}</h2> 
                 <p class = "flex"><img src="./Frame.png" alt="photo" />${element?.published_in}</p>
                </div>
                <div>
                <button onclick = modalShow('${element.id}');my_modal.showModal() class = "w-10 h-10 rounded-full pl-3 bg-[#FEF7F7] hover:ring-2 hover:ring-offset-4">
                  <img src="./Frame.svg" alt="photo" />
                </button>
                </div>
            </div>
        </div>
        </div>

        ` ;
        showContainer.appendChild(div)
    });
}

const modalShow  = async(modal) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${modal}`) ;
    const getData = await res.json() ;
    const data = getData.data ;
    console.log(data)
    modalShowContainer(data)
}
const modalShowContainer = (data) =>{
    const madalContainer = document.getElementById('modal-container') ; 
    madalContainer.innerHTML = ''
    const createDiv =document.createElement('div') 
    createDiv.innerHTML =`
    <div class="grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2 items-center justify-center p-8 bg-slate-100 rounded-xl relative">
    <div>
        <div class="card w-[400px] h-[500px] bg-[#eed6d6] shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title">${data?.description}</h2>
                <div class = "grid grid-cols-3 mt-3 gap-4">
                <div class ="p-3 text-green-600 text-xl font-semibold bg-slate-100 rounded-lg"><h2>${data?.pricing[1]?.price}</h2></div>
                    <div class ="p-3 text-amber-600 text-xl font-semibold bg-slate-100 rounded-lg"><h2>${data?.pricing[1]?.price}</h2></div>
                    <div class ="p-3 text-red-500 text-xl font-semibold bg-slate-100 rounded-lg"><h2>${data?.pricing[2]?.price}</h2></div>

                </div>
                <div class ="grid grid-cols-2 gap-5 items-start">
                    <div>
                        <h1 class ="text-2xl font-bold">Features</h1>
                        <ul>
                            <li>1. ${data?.features[1]?.feature_name}</li>
                            <li>2. ${data?.features[2]?.feature_name}</li>
                            <li>3. ${data?.features[3]?.feature_name}</li>
                        </ul>
                    </div>
                    <div>
                        <h1 class ="text-2xl font-bold">Integrations</h1>
                        <ul>
                           <li>1. ${data?.integrations[0]}</li>
                           <li>2. ${data?.integrations[1]}</li>
                           <li>3. ${data?.integrations[2]}</li> 
                        </ul>
                    </div>
                </div>
            </div>
         </div>
     </div> 
    <div>
        <div class="card w-[400px] h-[500px] bg-base-100 shadow-xl">
          <figure class="px-5 py-5 h-[70%] ">
            <img class = "w-full h-[100%] rounded-lg " src="${data?.image_link[0]}" alt="Shoes" class="rounded-xl" />
         </figure>
         <div class="card-body items-center text-center">
            <h2 class="card-title">${data?.input_output_examples[0]?.input}</h2>
            <p>${data?.input_output_examples[0]?.output}</p>
         </div>
        </div>
     </div>
     <div class="modal-action absolute right-0 top-0 rounded-full p-5 ">
        <button class="btn w-11 h-11 bg-red-500 rounded-full relative p-0 -top-[68px] left-[37px]"><img src ="./Frame (1).png" alt="photo" class = " w-full"/></button>
    </div>
                
    </div>
    `;
    madalContainer.appendChild(createDiv)

}
// modalShow()

loadContainer()