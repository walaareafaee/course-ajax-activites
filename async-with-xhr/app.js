(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedText = searchField.value;
        
    });

    function ShowCountry(){
        let htmlContent='';
            htmlContent=`<div class="card col-md-12 p-3"> 
                            <div class="row ">
                                <div class="col-md-4">
                                    <img class="w-100" src="" alt=""> 
                                </div>
                                <div class="col-md-8">
                                    <div class="card-block">
                                        <h5 class="card-title"></h5>
                                        <ul> 
                                            <li>nativeName: </li>
                                            <li>region: </li>
                                            <li>subregion: </li>
                                            <li>population: </li>
                                            <li>regional blocs: </li>
                                            <li>capital:</li>
                                            <li>timezones: </li>
                                            <li>currencies:</li>
                                            <li>language:
                                            </li>
                                        </ul> 
                                    </div>
                                </div>
                            </div>
                        </div>`;        
      
        responseContainer.insertAdjacentHTML('afterbegin',htmlContent);
    }
    function requestError(err,message){
        htmlContent=`<div class="error-no-country"></div>`;
        responseContainer.insertAdjacentHTML('afterbegin',htmlContent);
    }
  
})();
