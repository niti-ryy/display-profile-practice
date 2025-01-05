import PropTypes from 'prop-types' 

const Display=(props)=>{
    const {data}=props
    console.log(data,"data")
    return(
        <div>
            {
                data.length===0 ? <p>No user Data yet</p> : (
                    data.map((ele,i)=>{
                    console.log(data)
                    return(
                        <div key={i}>
                            <p>{ele.id}</p>
                            <p>{ele.name}</p>
                            <p>{ele.username}</p>
                            <p>{ele.website}</p>
                            <p>{ele.email}</p>
                        </div>
                    )
                })
                )
            }
            
            
        </div>
    )
}

Display.propTypes = {
    data: PropTypes.array.isRequired
}
export default Display