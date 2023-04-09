const Form = () => {
  return (
    <div className="flex pt-52 min-h-screen">
      <div className="pl-36">
        <img
          src=" https://cdn-icons-png.flaticon.com/512/5417/5417144.png"
          className="w-96 h-96"
        ></img>
      </div>
      <div className="pl-16">
        <h1 className="font-dmSans text-3xl text-bold text-dullGrey">
          Share your lost recepies with the world !
        </h1>
        <div class="w-full max-w-l pt-8">
          <form class="bg-white shadow-md rounded px-20 pt-6 pb-12 mb-8 pt-10 pl-24">
            <div class="mb-4">
              <label
                class="block text-lightRed text-l font-dmSans mb-2"
                for="Name"
              >
                Name of your dish
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Name"
              ></input>
            </div>
            <div class="mb-6">
              <label
                class="block text-lightRed text-l font-dmSans mb-2"
                for="Recipe"
              >
                The Recipe
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="Recipe"
              ></input>
            </div>
            <div class="mb-8">
              <label
                class="block text-lightRed text-l font-dmSans mb-2"
                for="Image"
              >
                Image
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="image"
                type="file"
                placeholder="Image"
              ></input>
              <p
                class="mt-1 text-sm font-dmSans text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
            <div>
              <button className=" pt-2 py-2 px-4 text-l text-lightPeach rounded-full bg-lightRed hover:opacity-80  border border-grey-900 font-dmSans">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
