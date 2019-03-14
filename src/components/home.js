import React, {Component} from 'react'
import './home.css'
import image1 from './directory.jpg'; 
import './form.css'

const div1={
    fontSize:'39px',
    padding:'30px',
    color:'white',
    backgroundColor:'rgba(31, 55, 105)'
}

class Message1 extends Component{
    constructor()
    {
        super()
        this.state={
            name: '',
            num: '',
            add:false,
            contacts:[]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event){ 
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
 
   

    handleSubmit(){ 

      const temp=this.state.contacts;
      const user={name:this.state.name,number:this.state.num}
      temp.push(user);

       this.setState({
        contacts:temp,
        add:false
       })
    

    }

    getButtonText()
    {
        if(this.state.add)
        {
            return(
                "Go back"
                )
        }

        else
        {
            return(
                "Add New")
        }
    }

    deleteContact(contact)
    {
        const tempData=this.state.contacts;
        const newData=[];

        tempData.forEach((obj)=>{
            if(obj.number!==contact.number)
            {
                newData.push(obj)
            }
        });

        this.setState(
            {
                contacts:newData
            }
        )
    }

    displayContacts()
    {
        return(
            this.state.contacts.map((obj)=>{
                const temp=obj.name;
            return(
                <div>
                    <p>
                      {obj.name}  
                    </p>
                    <p>
                        {obj.number}
                    </p>
                    <button id={obj.num} className='delete1' onClick={()=>this.deleteContact(obj)}>
                    Delete
                    </button>
                </div>
            )
        }))
    }



    renderComponent()
    {
        if(this.state.add)
        {
            return(

                <div>
                <div style={div1}>
                    <h2 >Add/delete any number easily in the directory</h2>
                    <p>Numbers can be added of any country</p>
                </div>

                <form>
                    <p>Enter the name:</p>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} id="b"/>
                    <p>Enter the number:</p>
                    <input type="number" name="num" value={this.state.num} onChange={this.handleChange} id="a" />
                    <button type="button" className='submit1' onClick={this.handleSubmit} value="Add"  >Submit </button>
                  
                </form>

                <h3>The number and name that will be added are:</h3>
                <div id="last">
                <p id="p1">{this.state.name}</p>
                <p id="p2">{this.state.num}</p>
                <p></p>
                </div>
                <footer>Designed and Developed By Ishan Arora</footer>
                </div>
                
            )
        }

        else
        {

            return (
                <div>
                
                <div className='head' >
                <div className='center'>
                <h1> Mini Phone Directory</h1>
                <pre>Add         Delete</pre>
                </div>
             </div>
        <div class="directory"> 
            <h4>My Current Directory:</h4>
            <div>
            {this.displayContacts()}
            </div>
        
         </div>
        <footer>
            Designed and Developed By Ishan Arora
        </footer>       
        </div>  )


        }

    }

    changeState()
    {
        if(this.state.add===true)
        {
        this.setState(
            {
                add:false
            }
        )
    }

    else
    {
        this.setState(
            {
                add:true
            })

    }
    }





    render()
    {

        return(
            <div>
                 <header>
                <h1 className='heading'>Phone Directory</h1>
                <button onClick={()=>{this.changeState()}}> {this.getButtonText()} </button>
                </header>
            {this.renderComponent()}
            </div>
        )
    }

}



export default Message1;












