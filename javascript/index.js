// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the cod

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          getInstruction('mashedPotatoes', 5, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          });
        });
      });
    });
  });
});

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
  return obtainInstruction("steak", 1)})
    .then( (step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction("steak", 2)})
      .then( (step3) => {
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
      return obtainInstruction("steak", 3)})
        .then( (step4) => {
          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
          return obtainInstruction("steak", 4)})
          .then( (step5) => {
            document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
            return obtainInstruction("steak", 5)})
            .then( (step6) => {
              document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
              return obtainInstruction("steak", 6)})
              .then( (step7) => {
                document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
                return obtainInstruction("steak", 7)})
                .then( (step8) => {
                  document.querySelector("#steak").innerHTML += `<li>${step8}</li>`
                  return obtainInstruction("steak", 8)})
                  .then( (step9) => {
                    document.querySelector("#steak").innerHTML += `<li>${step9}</li>`
                    return obtainInstruction("steak", 9)})

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    document.querySelector('#broccoli').innerHTML += `<li>${await obtainInstruction("broccoli", 0)}</li>`
    document.querySelector('#broccoli').innerHTML += `<li>${await obtainInstruction("broccoli", 1)}</li>`
    document.querySelector('#broccoli').innerHTML += `<li>${await obtainInstruction("broccoli", 2)}</li>`
    document.querySelector('#broccoli').innerHTML += `<li>${await obtainInstruction("broccoli", 3)}</li>`
    document.querySelector('#broccoli').innerHTML += `<li>${await obtainInstruction("broccoli", 4)}</li>`
    document.querySelector('#broccoli').innerHTML += `<li>${await obtainInstruction("broccoli", 5)}</li>`
    document.querySelector('#broccoli').innerHTML += `<li>${await obtainInstruction("broccoli", 6)}</li>`
    document.querySelector('#broccoli').innerHTML += `<li>${await obtainInstruction("broccoli", 7)}</li>`
    document.querySelector('#broccoli').innerHTML += `<li>${await obtainInstruction("broccoli", 8)}</li>`
  } catch (error) {return error}
}
makeBroccoli();


// Bonus 2 - Promise all
