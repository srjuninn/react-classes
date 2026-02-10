function TextButton(params){
    console.log(params)

    let object = {
        name: "ryan",
        age: 19,
        address: "avenida dos gados",
        phoneNumber: 11111111111
    }

    console.log(object.name)
    console.log(object.age)
    console.log(object.address)
    console.log(object.phoneNumber)

    let { name, age } = object

    console.log(name)
    console.log(age);
    

    return (
        <button type="button">
            {params.label}
        </button>
    )
}
export default TextButton