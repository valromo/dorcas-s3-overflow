import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview.js';
import Formulario from './Formulario.js';
import '../scss/Main.css';

// mapeado de clases
const paletteClass = {
  "1": 'greenTarget',
  "2": 'redTarget',
  "3": 'greyTarget'
}

const fontClass = {
  "1": 'ubuntuFont',
  "2": 'comicFont',
  "3": 'montFont'
}

class Main extends Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        job: '',
        image: '',
        email: '',
        phone: '',
        github: '',
        linkedin: '',
        palette: '',
        typography: ''
      },

      skillOptions: [],
      optionSelected1: '',
      optionSelected2: '',
      optionSelected3: '',
      skillsOnCard: ['HTML', 'CSS', 'JavaScript'],
      buttonIcon1: '+',
      buttonIcon2: '+',
      buttonIcon3: '+',
    }

    // rellena inputs binds

    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleJobInput = this.handleJobInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePhoneInput = this.handlePhoneInput.bind(this);
    this.handleGithubInput = this.handleGithubInput.bind(this);
    this.handleLinkedinInput = this.handleLinkedinInput.bind(this);
    this.fileInput = React.createRef();
    this.handleAddImage = this.handleAddImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.handleAbilitiesButton1 = this.handleAbilitiesButton1.bind(this);
    this.handleAbilitiesButton2 = this.handleAbilitiesButton2.bind(this);
    this.handleAbilitiesButton3 = this.handleAbilitiesButton3.bind(this);
    this.handleAbilitiesSelect1 = this.handleAbilitiesSelect1.bind(this);
    this.handleAbilitiesSelect2 = this.handleAbilitiesSelect2.bind(this);
    this.handleAbilitiesSelect3 = this.handleAbilitiesSelect3.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleRadioColor = this.handleRadioColor.bind(this);
    this.handleRadioTypography = this.handleRadioTypography.bind(this);

  }
  handleRadioColor(event) {
    console.log(event.target.value)
    const { value } = event.target;
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        palette: value
      }
    }), () => {

      console.log(this.state.data.palette)

    })

  }

  handleRadioTypography(event) {
    console.log(event.target.value)
    const {
      value
    } = event.target;
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        typography: value
      }
    }), () => {

      console.log(this.state.data.typography)

    })

  }

  handleClickImage(event) {
    const fr = new FileReader();
    fr.addEventListener('load', () => {
      this.setState({ image: fr.result });
    });
    fr.readAsDataURL(event.target.files[0]);

  }

  // handle rellena inputs

  handleNameInput(event) {
    this.setState({
      data: {
        ...this.state.data,
        name: event.target.value
      }
    })
  }

  handleJobInput(event) {
    this.setState({
      data: {
        ...this.state.data,
        job: event.target.value
      }
    })
  }

  handleEmailInput(event) {
    this.setState({
      data: {
        ...this.state.data,
        email: event.target.value
      }
    })
  }

  handlePhoneInput(event) {
    this.setState({
      data: {
        ...this.state.data,
        phone: event.target.value
      }
    })
  }

  handleGithubInput(event) {
    this.setState({
      data: {
        ...this.state.data,
        github: event.target.value
      }
    })
  }

  handleLinkedinInput(event) {
    this.setState({
      data: {
        ...this.state.data,
        linkedin: event.target.value
      }
    })
  }

  // handle imagen load

  handleAddImage(event) {
    this.fileInput.current.click()
  }


  handleClickImage(event) {
    const fr = new FileReader();

    fr.addEventListener('load', () => {
      this.setState({
        data: {
          ...this.state.data,
          image: fr.result
        }
      })
    })

    fr.readAsDataURL(event.target.files[0]);

  }

  // fetch to get skills
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
      .then((response) => response.json())
      .then((jsonskills) => {
        this.setState({
          skillOptions: jsonskills.skills
        });
      });
  }

  // Skills handlers

  handleAbilitiesSelect1(event) {
    console.log(event.target.value)
    this.setState({
      optionSelected1: event.target.value,
    })
  }

  handleAbilitiesSelect2(event) {
    this.setState({
      optionSelected2: event.target.value,
    })
  }

  handleAbilitiesSelect3(event) {
    this.setState({
      optionSelected3: event.target.value,
    })
  }

  handleAbilitiesButton1(event) {
    event.preventDefault();
    // lógica para cambiar el signo del botón
    this.setState((prevState, props) => ({
      buttonIcon1: (prevState.buttonIcon1 === '+') ? '-' : '+'
    }));
    // lógica para añadir o quitar skills de la tarjeta
    if (this.state.buttonIcon1 === '+') {
      const array = [...this.state.skillsOnCard]
      this.setState({
        skillsOnCard: [this.state.optionSelected1, ...array.slice(1, 3)]
      })
    } else {
      const array = [...this.state.skillsOnCard]; // make a separate copy of the array
      array.splice(0, 1, '');
      this.setState({ skillsOnCard: array });
    }
  }

  handleAbilitiesButton2(event) {
    event.preventDefault();
    // lógica para cambiar el signo del botón
    this.setState((prevState, props) => ({
      buttonIcon2: (prevState.buttonIcon2 === '+') ? '-' : '+'
    }));
    // lógica para añadir o quitar skills de la tarjeta
    if (this.state.buttonIcon2 === '+') {
      const array = [...this.state.skillsOnCard]
      this.setState({
        skillsOnCard: [array[0], this.state.optionSelected2, array[2]]
      })
    } else {
      const array = [...this.state.skillsOnCard]; // make a separate copy of the array
      array.splice(1, 1, '');
      this.setState({ skillsOnCard: array });
    }
  }

  handleAbilitiesButton3(event) {
    event.preventDefault();
    // lógica para cambiar el signo del botón
    this.setState((prevState, props) => ({
      buttonIcon3: (prevState.buttonIcon3 === '+') ? '-' : '+'
    }));
    // lógica para añadir o quitar skills de la tarjeta
    if (this.state.buttonIcon3 === '+') {
      const array = [...this.state.skillsOnCard]
      this.setState({
        skillsOnCard: [array[0], array[1], this.state.optionSelected3]
      })
    } else {
      const array = [...this.state.skillsOnCard]; // make a separate copy of the array
      array.splice(2, 1, '');
      this.setState({ skillsOnCard: array });
    }
  }

  handleReset(event) {
    event.preventDefault()

    this.setState({
      data: {
        name: '',
        job: '',
        image: '',
        email: '',
        phone: '',
        github: '',
        linkedin: '',
        palette: '',
        typography: ''
      },

      optionSelected1: '',
      optionSelected2: '',
      optionSelected3: '',
      skillsOnCard: ['HTML', 'CSS', 'JavaScript'],
      buttonIcon1: '+',
      buttonIcon2: '+',
      buttonIcon3: '+',
    })
  }
  componentWillMount(){
    localStorage.getItem('datos') && this.setState({
      data: JSON.parse(localStorage.getItem('datos'))
    
    })
  }

  componentWillUpdate(nextProps, nextState){

    localStorage.setItem('datos', JSON.stringify(nextState.data));
  }

  render() {
    const userInfo = this.state.data
    console.log(userInfo)
    return (
      <main className="container-mediaqueries-preview">
        <Preview
          OnResetButton={this.handleReset}
          name={userInfo.name}
          job={userInfo.job}
          email={userInfo.email}
          phone={userInfo.phone}
          github={userInfo.github}
          linkedin={userInfo.linkedin}
          photo={userInfo.image}
          skillsOnCard={this.state.skillsOnCard}
          paletteClass={paletteClass[userInfo.palette]}
          typographyClass={fontClass[userInfo.typography]}
        />
        <Formulario
          onChangeRadioColor={this.handleRadioColor}
          onChangeRadioTypography={this.handleRadioTypography}
          userInfo={this.state.data}
          onInputNameChange={this.handleNameInput}
          onInputJobChange={this.handleJobInput}
          onInputImageClick={this.handleAddImage}
          onInputImageChange={this.handleClickImage}
          onInputEmailChange={this.handleEmailInput}
          onInputPhoneChange={this.handlePhoneInput}
          onInputGitChange={this.handleGithubInput}
          onInputLinkedinChange={this.handleLinkedinInput}
          skillOptions={this.state.skillOptions}
          fileInput={this.fileInput}
          skillOptions={this.state.skillOptions}
          handleAbilitiesButton1={this.handleAbilitiesButton1}
          handleAbilitiesButton2={this.handleAbilitiesButton2}
          handleAbilitiesButton3={this.handleAbilitiesButton3}
          handleAbilitiesSelect1={this.handleAbilitiesSelect1}
          handleAbilitiesSelect2={this.handleAbilitiesSelect2}
          handleAbilitiesSelect3={this.handleAbilitiesSelect3}
          buttonIcon1={this.state.buttonIcon1}
          buttonIcon2={this.state.buttonIcon2}
          buttonIcon3={this.state.buttonIcon3}
        />
      </main>

    );
  }
}

Main.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  image: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.number,
  github: PropTypes.string,
  linkedin: PropTypes.string,
  skills: PropTypes.array,
  palette: PropTypes.string,
  typography: PropTypes.string,
  skillOptions: PropTypes.array,
  // nombre de los selects:PropTypes.array
};

export default Main;