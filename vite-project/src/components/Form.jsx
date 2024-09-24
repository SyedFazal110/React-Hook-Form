import React from 'react'
import { useForm } from "react-hook-form"

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>
            <h1>Admission Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <label htmlFor="Full_Name">Full Name </label>
                        <input {...register("Full_Name", { required: true })} type="text" id="Full_Name" placeholder="Full Name" />
                        {errors.Full_Name && <span>This field is required</span>}
                    </div>
                    <div>
                        <label htmlFor="Father_Name">Father Name</label>
                        <input {...register("Father_Name", { required: true })} type="text" id="Father_Name" placeholder="Father Name" required="" />
                        {errors.Father_Name && <span>This field is required</span>}
                    </div>
                    <div>
                        <label htmlFor="Email">Email</label>
                        <input {...register("Email", { required: true })} type="email" id="Email" placeholder="Email" required="" />
                        {errors.Email && <span className='text-[red]'>This field is required</span>}
                    </div>
                    <div>
                        <label htmlFor="Phone_Number">Contact Number</label>
                        <input {...register("Phone_Number", { required: true })} type="number" id="Phone_Number" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required="" />
                        {errors.Phone_Number && <span>This field is required</span>}
                    </div>
                    <div>
                        <label htmlFor="CNIC">National ID (CNIC)</label>
                        <input {...register("CNIC", { required: true })} type="number" id="CNIC" placeholder="CNIC" required="" />
                        {errors.CNIC && <span>This field is required</span>}
                    </div>
                    <div>
                        <label htmlFor="Date_of_Birth"> Date of Birth</label>
                        <input {...register("Date_of_Birth", { required: true })}
                        type="date" id="Date_of_Birth" placeholder="" required="" />
                        {errors.Date_of_Birth && <span>This field is required</span>}
                    </div>
                </div>
                <div>
                    <label htmlFor="Gender">Gender</label>
                    <select {...register("Gender", { required: true })} id="Gender" name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.Gender && <span>This field is required</span>}
                </div>
                <div>
                    <label htmlFor="Laptop">Do you have a Laptop?</label>
                    <select {...register("Laptop", { required: true })}id="gender" name="gender">
                        <option value="Yes">yes</option>
                        <option value="No">No</option>
                    </select>
                    {errors.Laptop && <span>This field is required</span>}
                </div>
                <div>
                    <label htmlFor="Address">Address</label>
                    <input {...register("Address", { required: true })}type="text" id="Address" placeholder="Address" required=""/>
                    {errors.Address && <span>This field is required</span>}
                </div>
                <div>
                    <label htmlFor="qualification">Last qualification</label>
                    <select  {...register("qualification", { required: true })}id="qualification" name="gender">
                        <option value="Matric">Matric</option>
                        <option value="Intermeiate">Intermeiate</option>
                        <option value="Bachelors">Bachelors</option>
                        <option value="Masters">Masters</option>
                    </select>
                    {errors.qualification && <span>This field is required</span>}
                </div>
                
                <div>
                    <label htmlFor="Profile_Image">Profile Image</label>
                    <input {...register("Profile_Image", { required: true })} type="file" id="Profile_Image"/> <br />
                    {errors.Profile_Image && <span>This field is required</span>}
                </div>
                <ul>
                    <li>With white or blue background</li>
                    <li>File type: jpg, jpeg, png</li>
                    <li>Upload your recent passport size picture</li>
                    <li>Your face should be clearly visible without any glasses</li>
                </ul>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Form