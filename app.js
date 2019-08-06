const {render} = ReactDOM;
const { Component } = React; 

// class App extends Component{
//     constructor(){
//         super(){
//             this.state = {
//                 products: [],
//                 companies: []
//             }
//         }
//     }
    
//     render(){
//         const {products} = this.state
//         React.createElement
//         Promise.all([])
//     }
// }
const companyAPI = "https://acme-users-api-rev.herokuapp.com/api/companies"
const productsAPI = "https://acme-users-api-rev.herokuapp.com/api/products"
const app = document.querySelector("#listings");
const productsList = document.querySelector("#productsList");
const companiesList = document.querySelector("#companiesList");
const headline = document.querySelector("#headline");

Promise.all([fetch(companyAPI), fetch(productsAPI)])
.then( response => Promise.all(response.map(r => r.json())))
.then( results => {
const companyArr = results[0];
const productArr = results[1];
  
const companyRender = companyArr.map(name => React.createElement("li", {className: name.name}, name.name ))
ReactDOM.render(companyRender, companiesList);

const productRender = productArr.map(name => React.createElement("li", { className: name.name }, name.name))
ReactDOM.render(productRender, productsList);

let str = `Acme - We have ${productArr.length} products and ${companyArr.length} companies.`
ReactDOM.render(str, headline)
}

)





