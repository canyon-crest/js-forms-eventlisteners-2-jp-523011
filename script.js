// ============================================
//  Unit 8.7 – Forms & Event Listeners
// ============================================
//  Complete each section below by following
//  the STEP comments.
//
//  IMPORTANT: Use addEventListener() to wire your
//  buttons — do NOT add onclick in the HTML.
// ============================================


// ============================================
//  WARM-UP: Shout It!
// ============================================
// When the user types text and clicks "Shout",
// display the text in ALL CAPS with "!" at the end.

// STEP 1: Get the "Shout" button by its ID ("btnShout")
//         using document.getElementById()
let btn = document.getElementById("btnShout")

// STEP 2: Add a click event listener to the button.
//         Inside the listener function:
//         a) Get the text from the input with ID "shoutInput"
//            using .value
//         b) Convert the text to uppercase using .toUpperCase()
//         c) Add "!" to the end
//         d) Display the result in the element with ID "outShout"
//            using .innerHTML
//
//         Example: "hello" → "HELLO!"
btn.addEventListener("click", function(){
    let text = shoutInput.value
    text = text.toUpperCase() + "!"
    outShout.innerHTML = text
})


// ============================================
//  MAIN: Pizza Builder
// ============================================
// Calculate the total price of a pizza based on:
//   - Size (radio buttons): Small $7.50, Medium $10.00,
//     Large $12.50, XL $15.00
//   - Toppings (checkboxes): $0.50 each
//   - Service (dropdown): Dine In $0, Take Out $1.50,
//     Delivery $3.00

// STEP 3: Get the "Calculate Total" button by ID ("btnCalc")
//         Add a click event listener.
//         Inside the listener:
let btn2 = document.getElementById("btnCalc")

//   a) Get the selected size price:
//      Use document.getElementsByName("rg") to get all
//      size radio buttons. Loop through them to find the
//      one that is .checked, and read its .value.
//      Convert to a number with parseFloat().
btn2.addEventListener("click", function(){
    let btn3 = document.getElementsByName("rg")
    for (let i = 0; i < btn3.length; i++) {
        if (btn3[i].checked) {
            let value = btn3[i].value
            value = parseFloat(value)
        }
    }
    let count = 0;
    let toppings = document.getElementsByName("cb")
    for (let i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            count++
        }
    }
    count *= 0.5
    let fee = document.getElementById("serviceSelect").value
    if (fee == "dinein") {
        fee = 0
    } else if (fee == "takeout") {
        fee = 1.5
    } else if (fee == "delivery") {
        fee = 3
    }
    let total = value + count + fee
    let name = document.getElementById("myInput").value
    if (name == "") {
        name = "Customer"
    }
    myPara.innerHTML = name + " , your total is " + total.toFixed(2)
})

//   b) Count checked toppings:
//      Use document.getElementsByName("cb") to get all
//      topping checkboxes. Loop through and count how
//      many are .checked. Multiply count by 0.50.

//   c) Get the service fee:
//      Use document.getElementById("serviceSelect").value
//      to get the selected option value ("dinein", "takeout",
//      or "delivery").
//      Use if/else if/else to set the fee:
//        "dinein"   → 0
//        "takeout"  → 1.50
//        "delivery" → 3.00

//   d) Calculate total: size + toppings + service fee

//   e) Get the customer name from the input with ID "myInput"

//   f) Display the result in the element with ID "myPara":
//      "[name], your total is $[total]"
//      Use .toFixed(2) to format the total.
//      Example: "Alice, your total is $13.50"
//      If name is empty, use "Customer" as the default.


// STEP 4: Get the "Clear" button by ID ("clearBtn")
//         Add a click event listener.
//         Inside the listener:
//         a) Set the name input value to ""
//         b) Set the Large radio (id "r3") to checked = true
//         c) Uncheck ALL topping checkboxes (loop through them)
//         d) Set the service dropdown value to "dinein"
//         e) Set the output paragraph innerHTML to ""
let Clear = document.getElementById("clearBtn")
Clear.addEventListener("click", function(){
    myInput.input.value = ''
    r3.checked = true
    let toppings = document.getElementsByName("cb")
    for (let i = 0; i < toppings.length; i++) {
        toppings[i].checked = false
    }
    serviceSelected.value = "dinein"
    myPara.innerHTML = ""

})