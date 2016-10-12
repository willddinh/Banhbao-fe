import React, { Component, PropTypes } from 'react'

export default class Quotes extends Component {

  render() {
    const { onQuoteClick, onSecretQuoteClick, isAuthenticated, quote, isSecretQuote } = this.props

    return (
      <div>
        <div className='col-sm-3'>
          <button onClick={onQuoteClick} className="btn btn-primary">
            Action without Authorization
          </button>
        </div>

        { isAuthenticated &&
          <div className='col-sm-3'>
            <button onClick={onSecretQuoteClick} className="btn btn-warning">
              Action with Authorization
            </button>
          </div>
        }

        <div className='col-sm-6'>
          { quote && !isSecretQuote &&
            <div>
              <blockquote>{quote}</blockquote>
            </div>
          }

          { quote && isAuthenticated && isSecretQuote &&
            <div>
              <span className="label label-danger">Secret Quote</span>
              <hr/>
              <blockquote>
                {JSON.stringify(quote)}
              </blockquote>
            </div>
          }
        </div>
      </div>
    )
  }
}

Quotes.propTypes = {
  onQuoteClick: PropTypes.func.isRequired,
  onSecretQuoteClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  quote: PropTypes.string,
  isSecretQuote: PropTypes.bool.isRequired
}