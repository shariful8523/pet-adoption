// category load to fetch

const loadCatagories = () => {
      fetch("https://openapi.programming-hero.com/api/peddy/categories")
      .then(res => res.json())
      .then(data => displayCategories(data.categories))
      .catch((error)=> console.log(error));
}

// category display show

const displayCategories = (data) => {
    const categoryContainer = document.getElementById("categories");

    data.forEach((item) => {
        
            // //   crate a button
               const div = document.createElement("div");
               div .classList.add = "div";
               div.innerHTML = `
               <button onclick="specificPets('${item.category}')" id="btn-${item.category}" class="border-2 py-4 btn-category rounded-xl px-7 text-xl font-bold flex justify-center items-center gap-5 btn h-[100px] ">
               <img src="${item.category_icon}"/>
               ${item.category}
               </button>
                  
             
           `;
   

            // // added button to catagory 
            
            categoryContainer.appendChild(div);
            
    });

    
};





// cat and dogs  load to fetch

const loadPetsData = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => loadPetsDetails(data.pets))
    .catch((error) => console.log("Error loading pets data:", error));
}

const loadPetsDetails = (pets) => {

    // console.log(pets);
    const peatsContainur = document.getElementById("catsdetails");
    peatsContainur.innerHTML='';
     
    pets.forEach ((pets) => {
    
       const card = document.createElement("div")
       card.innerHTML =`
            <div class="p-2 border rounded-lg ">
            <img src=${pets.image} alt="" class="rounded-xl w-full h-[200px]" />

            <div class="mt-3  ">
                    <h3 class="py-4 font-bold text-2xl ">${pets.pet_name}</h3>
                   <p class=" text-[#131313B3] "> <i class="fa-brands fa-slack"></i>  Breed : ${pets.breed}</p>
                   
                   <p class=" text-[#131313B3]"> <i class="fa-regular fa-calendar"></i> Birth: ${pets.date_of_birth}</p>
                   <p class=" text-[#131313B3]"> <i class="fa-solid fa-mercury"></i> Gender: ${pets.gender}</p>
                   <p class=" text-[#131313B3]"> <i class="fa-solid fa-dollar-sign"></i>  price: ${pets.price}$</p>
            </div>
                  <div class=" mt-5 flex gap-8 items-center">
                      <p class="btn btn-outline px-5 btn-sm" > <i class="fa-solid fa-thumbs-up"></i></p>
                     <button class="btn btn-outline btn-sm">Adopt</button>
                     <button class="btn btn-outline btn-sm" >Details</button>
                  
                  </div>
            </div>

       
       `

       peatsContainur.append(card)

    })


}

function specificPets(pets) {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${pets}`)
      .then(res => res.json())
      .then(data => loadPetsDetails(data.data));
    
  }



  
loadCatagories();
loadPetsData();





