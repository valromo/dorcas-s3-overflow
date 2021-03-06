import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsable from './Collapsable';
import Select from './Select';
import Overflow from '../images/overflow-group.jpeg';

class Formulario extends Component {
    render() {
        const {
            onChangeRadioColor,
            onChangeRadioTypography,
            userInfo,
            onInputNameChange,
            onInputJobChange,
            onInputEmailChange,
            onInputPhoneChange,
            onInputGitChange,
            onInputLinkedinChange,
            onInputImageClick,
            onInputImageChange,
            skillOptions,
            handleAbilitiesButton1,
            handleAbilitiesButton2,
            handleAbilitiesButton3,
            handleAbilitiesSelect1,
            handleAbilitiesSelect2,
            handleAbilitiesSelect3,
            buttonIcon1,
            buttonIcon2,
            buttonIcon3,
            collapsibleClassDesign,
            collapsibleClassFill,
            collapsibleClassShare,
            isHiddenDesign,
            isHiddenFill,
            isHiddenShare,
            handleCollapsibleDesing,
            handleCollapsibleRellena,
            handleCollapsibleComparte,
            onSubmitkCreateCard,
            url,
            twitterButtonHandler,
            twitterURL,
            photo,
            fileInput,
            twitterClass
        } = this.props;

        return (
            <div className="container-izquierda">
                <form className="form" onSubmit={onSubmitkCreateCard}>
                    <Collapsable
                        seccion='DISEÑA'
                        icono={`far fa-object-ungroup`}
                        handleCollapsible={handleCollapsibleDesing}
                        collapsibleClass={collapsibleClassDesign}
                        isHidden={isHiddenDesign}
                    >
                        <fieldset className="fieldset-colors">
                            <div className="container-legend-label-input">
                                <legend className="form__subtitle">COLORES</legend>
                                <div className="container__input__labels">
                                    <label className="container_input_div" htmlFor="form__subtitle__first-color">
                                        <input
                                            className="clikable local--palette radio-color"
                                            data-donde="greenTarget"
                                            id="form__subtitle__first-color"
                                            type="radio"
                                            value="1"
                                            name="palette"
                                            defaultChecked
                                            onChange={onChangeRadioColor} />
                                        <span className="checkmark"></span>
                                        <div className="container__square">
                                            <div className="first-color__square1"></div>
                                            <div className="first-color__square2"></div>
                                            <div className="first-color__square3"></div>
                                        </div>
                                    </label>
                                    <label className="container_input_div" htmlFor="form__subtitle__second-color">
                                        <input
                                            className="clikable local--palette radio-color"
                                            data-donde="redTarget"
                                            id="form__subtitle__second-color"
                                            type="radio"
                                            value="2"
                                            name="palette"
                                            onChange={onChangeRadioColor} />
                                        <span className="checkmark"></span>
                                        <div className="container__square">
                                            <div className="second-color__square1"></div>
                                            <div className="second-color__square2"></div>
                                            <div className="second-color__square3"></div>
                                        </div>
                                    </label>
                                    <label className="container_input_div" htmlFor="form__subtitle__third-color">
                                        <input
                                            className="clikable local--palette radio-color"
                                            data-donde="greyTarget"
                                            id="form__subtitle__third-color"
                                            type="radio"
                                            value="3"
                                            name="palette"
                                            onChange={onChangeRadioColor} />
                                        <span className="checkmark"></span>
                                        <div className="container__square group-square2">
                                            <div className="third-color__square1"></div>
                                            <div className="third-color__square2"></div>
                                            <div className="third-color__square3"></div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className="fieldset-font">
                            <div className="container-legend-label-input">
                                <legend className="form__subtitle">FUENTES</legend>
                                <div className="container__input__labels ">
                                    <label
                                        className="font1 container_input_font container_input_div"
                                        htmlFor="form__subtitle__first-font">
                                        <input
                                            className="clikable local--typography radio-font"
                                            data-donde="ubuntuFont"
                                            id="form__subtitle__first-font"
                                            type="radio"
                                            value="1"
                                            name="typography"
                                            defaultChecked
                                            onChange={onChangeRadioTypography} />
                                        <span className="checkmark"></span>
                                        <div className="container__font">
                                            Ubuntu
                                        </div>
                                    </label>
                                    <label
                                        className="font2 container_input_font container_input_div"
                                        htmlFor="form__subtitle__second-font">
                                        <input
                                            className="clikable local--typography radio-font"
                                            data-donde="comicFont"
                                            id="form__subtitle__second-font"
                                            type="radio"
                                            value="2"
                                            name="typography"
                                            onChange={onChangeRadioTypography}
                                        />
                                        <span className="checkmark"></span>
                                        <div className="container__font">
                                            Comic Sans
                                        </div>
                                    </label>
                                    <label
                                        className="font3 container_input_div"
                                        htmlFor="form__subtitle__third-font">
                                        <input
                                            className="clikable local--typography radio-font"
                                            data-donde="montFont"
                                            id="form__subtitle__third-font"
                                            type="radio"
                                            value="3"
                                            name="typography"
                                            onChange={onChangeRadioTypography} />
                                        <span className="checkmark"></span>
                                        <div className="container__font">
                                            Montserrat
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </Collapsable>
                    <Collapsable
                        seccion={`RELLENA`}
                        icono={`far fa-keyboard`}
                        handleCollapsible={handleCollapsibleRellena}
                        collapsibleClass={collapsibleClassFill}
                        isHidden={isHiddenFill}
                    >
                        <div className="form__container">
                            <label className="form__label" htmlFor="nombre">Nombre completo</label>
                            <input
                                className="form__input form__input--nombre local--input--name"
                                id="nombre"
                                type="text"
                                name="name"
                                placeholder="Ej. Olatz"
                                maxLength="19"
                                value={userInfo.name}
                                onChange={onInputNameChange} />
                            <label className="form__label" htmlFor="puesto">Puesto</label>
                            <input
                                className="form__input form__input--puesto local--input--job"
                                id="puesto"
                                type="text"
                                name="job"
                                placeholder="Ej. Realfooder"
                                maxLength="22"
                                value={userInfo.job}
                                onChange={onInputJobChange} />
                            <label className="form__label">Imagen de perfil</label>
                            <div className="form__container--imagen">
                                <div className="action form__container--imagen">
                                    <button
                                        className="action__upload-btn boton__añadir-imagen"
                                        type="button"
                                        onClick={onInputImageClick}>Añadir imagen</button>
                                    <input
                                        type="file"
                                        name="photo"
                                        id="img-selector"
                                        className="action__hiddenField"
                                        ref={fileInput}
                                        onChange={onInputImageChange} />
                                </div>
                                <div className="profile-image contenedor--imagen">
                                    <img
                                        className="profile-image__item"
                                        src={photo || Overflow}
                                        alt="Foto de perfil" />
                                </div>
                            </div>
                            <label className="form__label" htmlFor="email">Email</label>
                            <input
                                className="form__input inputhref form__mail local--input--email"
                                id="email"
                                type="mail"
                                name="email"
                                placeholder="Ej. sansebastianmola@soyvasca.com"
                                value={userInfo.email}
                                onChange={onInputEmailChange} />
                            <label className="form__label" htmlFor="telefono">Teléfono</label>
                            <input
                                className="form__input inputhref form__telefono local--input--phone"
                                id="telefono"
                                type="number"
                                name="phone"
                                placeholder="Ej. 982938437"
                                value={userInfo.phone}
                                onChange={onInputPhoneChange} />
                            <label className="form__label " htmlFor="linkedin">Linkedin</label>
                            <input
                                className="form__input inputhref form__linkedin local--input--linkedin"
                                id="linkedin"
                                type="text"
                                name="linkedin"
                                placeholder="Ej. olatz.reina"
                                value={userInfo.linkedin}
                                onChange={onInputLinkedinChange} />
                            <label className="form__label" htmlFor="github">Github</label>
                            <input
                                className="form__input inputhref form__github local--input--github"
                                id="github"
                                type="text"
                                name="github"
                                placeholder="Ej. olatz-reina"
                                value={userInfo.github}
                                onChange={onInputGitChange} />

                            <div className="form__container--habilidades">
                                <label className="form__label" htmlFor="habilidades">Habilidades (máximo 3)</label>
                            </div>

                            <div className="form__container--habilidad">
                                <Select
                                    skillOptions={skillOptions}
                                    onClickAbilityButton1={handleAbilitiesButton1}
                                    onClickAbilityButton2={handleAbilitiesButton2}
                                    onClickAbilityButton3={handleAbilitiesButton3}
                                    onChangeAbilitySelect1={handleAbilitiesSelect1}
                                    onChangeAbilitySelect2={handleAbilitiesSelect2}
                                    onChangeAbilitySelect3={handleAbilitiesSelect3}
                                    buttonIcon1={buttonIcon1}
                                    buttonIcon2={buttonIcon2}
                                    buttonIcon3={buttonIcon3} />
                            </div>
                        </div>
                    </Collapsable>
                    <Collapsable
                        seccion={`COMPARTE`}
                        icono={`fas fa-share-alt`}
                        handleCollapsible={handleCollapsibleComparte}
                        collapsibleClass={collapsibleClassShare}
                        isHidden={isHiddenShare}
                    >
                        <div className="contenedor-boton">
                            <button className="makecard submit" id="submit" type="submit">CREAR TARJETA<i className="far fa-address-card"></i>
                            </button>
                            <a href={url} target="_blank">{url}</a>
                            <span className="rectangl2"></span>
                        </div>
                        <div className={`contenedor-twitter ${twitterClass}`}>
                            <a
                                href={twitterURL}
                                className="maketwitter"
                                target="_blank"
                                onClick={twitterButtonHandler}
                            >&nbsp;&nbsp;Compartir en Twitter
                            <i className="fab fa-twitter"></i>
                            </a>
                            <span className="rectangl2"></span>
                        </div>
                    </Collapsable>
                </form>
            </div >
        );
    }
}

Formulario.propTypes = {
    onChangeRadioColor: PropTypes.func.isRequired,
    onChangeRadioTypography: PropTypes.func.isRequired,
    userInfo: PropTypes.object.isRequired,
    onInputNameChange: PropTypes.func.isRequired,
    onInputJobChange: PropTypes.func.isRequired,
    onInputEmailChange: PropTypes.func.isRequired,
    onInputPhoneChange: PropTypes.func.isRequired,
    onInputGitChange: PropTypes.func.isRequired,
    onInputLinkedinChange: PropTypes.func.isRequired,
    onInputImageClick: PropTypes.func.isRequired,
    onInputImageChange: PropTypes.func.isRequired,
    skillOptions: PropTypes.array.isRequired,
    handleAbilitiesButton1: PropTypes.func.isRequired,
    handleAbilitiesButton2: PropTypes.func.isRequired,
    handleAbilitiesButton3: PropTypes.func.isRequired,
    handleAbilitiesSelect1: PropTypes.func.isRequired,
    handleAbilitiesSelect2: PropTypes.func.isRequired,
    handleAbilitiesSelect3: PropTypes.func.isRequired,
    buttonIcon1: PropTypes.string.isRequired,
    buttonIcon2: PropTypes.string.isRequired,
    buttonIcon3: PropTypes.string.isRequired,
    collapsibleClassDesign: PropTypes.string.isRequired,
    collapsibleClassFill: PropTypes.string.isRequired,
    collapsibleClassShare: PropTypes.string.isRequired,
    isHiddenDesign: PropTypes.bool.isRequired,
    isHiddenFill: PropTypes.bool.isRequired,
    isHiddenShare: PropTypes.bool.isRequired,
    handleCollapsibleDesing: PropTypes.func.isRequired,
    handleCollapsibleRellena: PropTypes.func.isRequired,
    handleCollapsibleComparte: PropTypes.func.isRequired,
    onSubmitkCreateCard: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    twitterButtonHandler: PropTypes.func.isRequired,
    twitterURL: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    fileInput: PropTypes.func.isRequired,
    twitterClass: PropTypes.string.isRequired,
};

export default Formulario;
