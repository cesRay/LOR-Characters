// HTML resources.
const allCharacters = {}

const inputName = document.querySelector('#name')

const inputRace = document.querySelector('#race')

const inputOrigin = document.querySelector('#origin')

const inputSkills = document.querySelector('#skills')

const buttonCreate = document.querySelector('#createCharacter')

const divCreate = document.querySelector('#divCreate')

// Feedback messages.

const errorMessage = document.createElement('p')
errorMessage.classList.add('error')

const successMessage = document.createElement('p')
successMessage.innerText = 'Character created succesfully!'
successMessage.classList.add('success')

let errorAlready = false
let successAlready = false
let characterTwice = false

// Listeners for inputs.
inputName.addEventListener('input', () => {
  if (errorAlready === true) {
    divCreate.removeChild(errorMessage)
    errorAlready = false
  } else if (successAlready === true) {
    divCreate.removeChild(successMessage)
    successAlready = false
  }
})

inputRace.addEventListener('input', () => {
  if (errorAlready === true) {
    divCreate.removeChild(errorMessage)
    errorAlready = false
  } else if (successAlready === true) {
    divCreate.removeChild(successMessage)
    successAlready = false
  }
})

inputOrigin.addEventListener('input', () => {
  if (errorAlready === true) {
    divCreate.removeChild(errorMessage)
    errorAlready = false
  } else if (successAlready === true) {
    divCreate.removeChild(successMessage)
    successAlready = false
  }
})

inputSkills.addEventListener('input', () => {
  if (errorAlready === true) {
    divCreate.removeChild(errorMessage)
    errorAlready = false
  } else if (successAlready === true) {
    divCreate.removeChild(successMessage)
    successAlready = false
  }
})

// Listener for buttons.
buttonCreate.addEventListener('click', () => {
  let error = false

  // Make sure inputs are not empty.
  if (inputName.value === '' || inputName.value === null || inputName.value === undefined) {
    error = true
  } else if (inputRace.value === '' || inputRace.value === null || inputRace.value === undefined) {
    error = true
  } else if (inputOrigin.value === '' || inputOrigin.value === null || inputOrigin.value === undefined) {
    error = true
  } else if (inputSkills.value === '' || inputSkills.value === null || inputSkills.value === undefined) {
    error = true
  }

  const registeredCharacters = Object.keys(allCharacters)

  if (registeredCharacters.includes(inputName.value)) {
    characterTwice = true
  } else {
    characterTwice = false
  }

  if (error === false && characterTwice === false) {
    // Get the value of the input
    let skills = inputSkills.value

    // Turn text into an array separated by commas.
    skills = skills.split(',')

    // Build the object of the character.
    allCharacters[inputName.value] = {
      name: inputName.value,
      race: inputRace.value,
      origin: inputOrigin.value,
      skills: skills
    }
    // Tell the user that the character has been created.
    divCreate.append(successMessage)
    successAlready = true

    // Remove message after 2 seconds.
    setTimeout(() => {
      divCreate.removeChild(successMessage)
      successAlready = false
    }, 2000)

    console.clear()
    console.log(allCharacters)
  } else if (error === true) {
    // Tell the user there is an error, and all fields must be filled.
    errorMessage.innerText = 'You shall not pass! All fields must be filled!'
    divCreate.append(errorMessage)
    errorAlready = true
  } else if (characterTwice === true) {
    // Tell the user the character he/she is registering already exists.
    errorMessage.innerText = 'There`s already a character with that name!'
    divCreate.append(errorMessage)
    errorAlready = true
  } else {
    errorMessage.innerText = 'Get your shit together, you broke the site!'
    divCreate.append(errorMessage)
    errorAlready = true
  }
})
