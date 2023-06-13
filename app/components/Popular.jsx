import * as React from 'react'

export default class Popular extends React.Component {
    render () {
        const languages = ['all', 'javascript', 'java', 'python']
        return(
            <select>
              {languages.map((language, index) => (
                <option key={index}>{language}</option>
              ))}

            </select>
        )
    }
}