 
/**
 * category load korte hbe--- koyta category ache seta load hbe---- creating loadCategory
 * const category api = https://openapi.programming-hero.com/api/peddy/categories
 * const demo = categories": [
    {
      "id": 1,
      "category": "Cat",
      "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
    },
 * 
 */
const loadCategory = () =>{
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then(res => res.json())
    .then(data => displayCategory(data.categories))
    .catch(error => console.log(error));
};

// category card load korte hbe ------- loadCategoryCard function
const loadCategoryCard = (category) =>{
    // alert(category);
  
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then(res => res.json())
    .then(data => {
      // remove active class
      activeClassRemover();

      // here active class will be added
      const activeBtn = document.getElementById(`btn-${category}`);
      activeBtn.classList.add('active');
      displayPetCard(data.data);
    })
    .catch(error => console.log(error));


};

// category display korte hbe and button create hbe---- creating displayCategory------ loadCategory te data. er por ja thakbe setakei ekhane parameter dbo bujhar subidhar jnno
const displayCategory = (categories) =>{
    const categoryBtnContainer = document.getElementById('pet-buttons');
    categories.forEach((item) => {

        /**
         * categories": [
    {
      "id": 1,
      "category": "Cat",
      "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
    },
         */
        // create button for each category
       const buttonContainer = document.createElement('div');
       buttonContainer.innerHTML = `
       <button id="btn-${item.category}" onclick="loadCategoryCard('${item.category}')" class='category-btn'>${item.category}</button>
       `;
       categoryBtnContainer.append(buttonContainer);
    });
};

// load details ------------------- loadDetails function
const loadDetails = async (petId) =>{
  const uri = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
  const res = await fetch(uri);
  const data = await res.json();
  displayDetails(data.petData);
};

// display details ------------------- displayDetails function
const displayDetails = (petDetails) =>{
  console.log(petDetails);
  const detailContainer = document.getElementById('modal-content');
  detailContainer.innerHTML = `
  <img class="w-full" src="${petDetails.image}" alt="">
  <h2 class="font-bold text-2xl">${petDetails.pet_name}</h2>
  <div class='flex mt-[2px] ml-[5px]'>
  <section>
  <p>Breed: ${petDetails.breed}</p>
  <p>Gender: ${petDetails.gender}</p>
  <p>Vaccinated status:${petDetails.vaccinated_status}</p>
  </section>
  <section class="ml-[40px]">
  <p>Birth: ${petDetails.date_of_birth} </p>
  <p>Price: ${petDetails.price} </p>
  </section>
  </div>
  <hr class="mt-2">
  <h3 class="mt-[2px text-base] font-semibold">Details Information</h3>
  <p class="mt-[2px]">${petDetails.pet_details}</p>

  `;
  // way 1
  // document.getElementById('showModalData').click();
  // way 2
  document.getElementById('customModal').showModal();

};

// adopt e click korle countdown modal asbe
const loadAdopt = async (petId) =>{
  const uri = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
  const res = await fetch(uri);
  const data = await res.json();
  displayAdopt(data.petData);
};
//  countdown modal show korate hbe
const displayAdopt = (petDetails) =>{
  console.log(petDetails);
  const adoptContainer = document.getElementById('modal-content');
  adoptContainer.innerHTML = `
  <img class="w-full" src="${petDetails.image}" alt="">

  <hr class="mt-2">
  <h3 class="mt-4px text-base font-semibold">Successfully Adopted!</h3>
 

  `;
  // way 1
  // document.getElementById('showModalData').click();
  // way 2
  document.getElementById('customModal').showModal();

};



/**
 * All pet card load korte hbe --- loadPetCard function
 * const all pet api = https://openapi.programming-hero.com/api/peddy/pets
 * const demo = pets": [
    {
      "petId": 1,
      "breed": "Golden Retriever",
      "category": "Dog",
      "date_of_birth": "2023-01-15",
      "price": 1200,
      "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
      "gender": "Male",
      "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
      "vaccinated_status": "Fully",
      "pet_name": "Sunny"
    },
 
 */
const loadPetCard = () =>{
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => displayPetCard(data.pets))
    .catch(error => console.log(error));

};

// like e click korle side e img show korte hbe
const loadImg = async (petId) =>{
  const uri = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
  const res = await fetch(uri);
  const data = await res.json();
  displayImg(data.petData);
};

// show img for like btn
const displayImg = (petImg) =>{
   console.log(petImg);
  const likeImgContainer = document.getElementById('imageOfPets');
  const imgDiv = document.createElement('div');
  imgDiv.innerHTML = `
  <div class="w-[24px] h-[24px]">
     <img src=${petImg.image} alt="">  
  </div>
  
  `;
  likeImgContainer.append(imgDiv);

};

// pet card display korte hbe---- creating displayPetCard
const displayPetCard = (pets) =>{
    const petContainer = document.getElementById('pet-card-container');
    petContainer.innerHTML = "";

    if(pets.length == 0){
      petContainer.classList.remove('grid');
      petContainer.innerHTML = `

      <div class="min-h-[300px]   flex flex-col gap-5  justify-center items-center">
      <img src="assests/images/error.webp" alt="">

      <h2 class="text-3xl font-bold">No Information Available</h2>
      <p class= "text-base font-normal  w-[760px] h-[52px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
      its layout. The point of using Lorem Ipsum is that it has a.</p>

      </div>

      `;
      return;

    }
    else{
      petContainer.classList.add('grid');

    }
    pets.forEach(pet =>{
        
        const card = document.createElement('div');
        card.classList= "card card-compact";
         card.innerHTML = `


           <figure class="h-[200px]">
              <img class="h-full w-full object-cover" src=${pet.image} alt="" />
            </figure>
            <div class="card-body object-cover mt-2">
                <h2 class="card-title text-base">${pet.category}</h2>
                <p class="ml-2">Breed: ${pet.breed} </p>
                <p class="ml-2">Birth: ${pet.date_of_birth} </p>
                <p class="ml-2">Gender: ${pet.gender} </p>
                <p class="ml-2">Price: ${pet.price} </p>
            </div>
            <hr class="mx-2 mb-2">
            <div class="flex space-x-4 mx-5 mt-2 mb-2">
                 <button onclick="loadImg(${pet.petId})" class="rounded-md w-[56px] h-[38px] text-[#0E7A81] font-bold text-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
               </svg>
                </button>
                 <button onclick="loadAdopt(${pet.petId})" class="border border-slate-500 rounded-md w-[92px] h-[40px]  text-[#0E7A81] font-bold text-lg">Adopt</button>
                 <button onclick="loadDetails(${pet.petId})" class="border border-slate-500 rounded-md w-[92px] h-[40px]  text-[#0E7A81] font-bold text-lg">Details</button>
            </div>


        
        `;
        petContainer.append(card);

    });
};

      // add active class
      const activeClassRemover = () =>{
        const buttons = document.getElementsByClassName('category-btn');
        for(let btn of buttons){
            btn.classList.remove("active");
       }
      };



loadCategory();
loadPetCard();
