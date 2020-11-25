import React, {useState} from 'react'
import {Form,Button} from 'react-bootstrap'

const SearchForm = (props) => {
    const [searchTerm,setSearchTerm] = useState('')
    const [errormMsg,setErrorMsg] = useState('')
    const handleInputChange = (event) => {
        const searchTerm = event.target.value
        setSearchTerm(searchTerm)
    }
    const handleSearch = (event) => {
        event.preventDefault()
        if(searchTerm.trim() !== '') {
            setErrorMsg('')
            props.handleSearch(searchTerm)
        } else {
            setErrorMsg('Please enter a search term.')
        }
    }

    return (
        <div>
            <Form onSubmit={handleSearch}>
                {errormMsg && <p className="errorMsg">{errormMsg}</p>}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter Search</Form.Label>
                    <Form.Control
                      type="search"
                      name="searchTerm"
                      value={searchTerm}
                      placeholder="Search for Album, artist or playlist"
                      onChange={handleInputChange}
                      autoComplete="off"
                      />
                </Form.Group>
                <Button variant="info" type="submit">
                    Search
                </Button>
            </Form>
        </div>
    )
}

export default SearchForm