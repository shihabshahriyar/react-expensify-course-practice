import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => {
    return (
        <div>
            <h1>This is Info</h1>
            <p>The info is: {props.info}</p>
        </div>
    )
}

const hasAdminPrivilages = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && props.isAdmin && <p>You are the admin!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const isAuthenticated = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated === true ? <WrappedComponent {...props}/> : <p>You are not authenticated</p> }
        </div>
    )
}

const AuthenticatedInfo = isAuthenticated(Info)
const AdminInfo = hasAdminPrivilages(AuthenticatedInfo)

ReactDOM.render(<AdminInfo isAuthenticated={true} isAdmin={false} info="Hello world!"/>,document.getElementById('app'))