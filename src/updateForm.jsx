
    import { useState } from "react"
    import PropTypes from 'prop-types'  

    const UpdateForm = ({ initialData,updatedData }) => {
        console.log('Initial Data:', initialData)
        
        const [formData, setFormData] = useState({
            id: initialData?.id || '',
            name: initialData?.name || '',        // Changed from username to name
            email: initialData?.email || '',
            website: initialData?.website || ''
        })

        
        const handleChange = (e) => {
            const { name, value } = e.target
            setFormData({
                ...formData,
                [name]: value
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            updatedData(formData)
            console.log('Submitted form data:', formData)

        }

        return (
            <div>
                <h2>Update Details</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="id">ID:</label>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            placeholder="Enter ID"
                            disabled={true}
                        />
                    </div>

                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"           // Changed from username to name
                            value={formData.name} // Changed from username to name
                            onChange={handleChange}
                            placeholder="Enter name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                        />
                    </div>

                    <div>
                        <label htmlFor="website">Website:</label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="Enter website"
                        />
                    </div>

                    <button type="submit">Update</button>
                </form>
            </div>
        )
    }

    UpdateForm.propTypes = {
        initialData: PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            name: PropTypes.string,
            email: PropTypes.string,
            website: PropTypes.string
        }),
        updatedData: PropTypes.func.isRequired
    }
    
    UpdateForm.defaultProps = {
        initialData: {
            id: '',
            name: '',
            email: '',
            website: ''
        }
    }

    export default UpdateForm

