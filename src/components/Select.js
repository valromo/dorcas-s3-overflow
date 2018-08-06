import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {

    render() {
        const {
            skillOptions,
            onClickAbilityButton1,
            onClickAbilityButton2,
            onClickAbilityButton3,
            onChangeAbilitySelect,
            buttonIcon1,
            buttonIcon2,
            buttonIcon3,
        } = this.props;
        return (
            <Fragment>
                <div className="form__container-select">
                    <select name="" id=""
                        className="form__select"
                        onChange={onChangeAbilitySelect}>
                        {skillOptions.map((skill, i) =>
                            <option
                                key={i}
                                value={skill}>
                                {skill}
                            </option>
                        )}
                    </select>
                    <div id="mama">
                        <button
                            type="button"
                            id="fetch"
                            className="button"
                            onClick={onClickAbilityButton1}
                        >

                            <div className="content-button-habilities">
                                {buttonIcon1}
                            </div>
                        </button>
                    </div>
                </div>
                <div className="form__container-select">
                    <select name="" id=""
                        className="form__select"
                        onChange={onChangeAbilitySelect}>
                        {skillOptions.map((skill, i) =>
                            <option
                                key={i}
                                value={skill}>
                                {skill}
                            </option>
                        )}
                    </select>
                    <div id="mama">
                        <button
                            type="button"
                            id="fetch"
                            className="button"
                            onClick={onClickAbilityButton2}
                        >

                            <div className="content-button-habilities">
                                {buttonIcon2}
                            </div>
                        </button>
                    </div>
                </div>
                <div className="form__container-select">
                    <select name="" id=""
                        className="form__select"
                        onChange={onChangeAbilitySelect}>
                        {skillOptions.map((skill, i) =>
                            <option
                                key={i}
                                value={skill}>
                                {skill}
                            </option>
                        )}
                    </select>
                    <div id="mama">
                        <button
                            type="button"
                            id="fetch"
                            className="button"
                            onClick={onClickAbilityButton3}
                        >

                            <div className="content-button-habilities">
                                {buttonIcon3}
                            </div>
                        </button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

Select.propTypes = {
    skillOptions: PropTypes.array

};

export default Select;