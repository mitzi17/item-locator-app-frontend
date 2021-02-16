class Item {
    constructor(attributes) {
      let whitelist = ["item_number", "name", "season", "price", "location"]
      whitelist.forEach(attr => this[attr] = attributes[attr])
    }

    static container() {
        return this.c ||= document.querySelector("#itemContainer")
      }

      static all() {
          console.log(this);
          return fetch("http://localhost:3000/items", {
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            }
          })
            .then(res => {
              if(res.ok) {
                return res.json() // returns a promise for body content parsed as JSON
              } else {
                return res.text().then(error => Promise.reject(error)) // return a reject promise so we skip the following then and go to catch
              }
            })
            .then(itemArray => {
              debugger
            })
          }
        }