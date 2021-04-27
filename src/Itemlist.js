import React,{useState} from 'react'
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import {Paper,IconButton,TextField,Button} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './itemlist.css'
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import AddIcon from '@material-ui/icons/Add';
import {db} from './firebase';
import { useStateValue } from './StateProvider';

function Itemlist({uid,mainname,description,checking}) {
  const [{useremail}]=useStateValue();
    const [check,setCheck]=useState(checking);
    const [dialog, setDialog]=useState(false);
    const [maininput,setMaininput]=useState(mainname);
    const [updateinput,setUpdateinput]=useState('');
    const [opendialog,setOpendialog]=useState(false);
    const[desdialog,setDesdialog]=useState(description);
    const[editdesdialog,setEditdesdialog]=useState('');


    
    
    const checkuncheck=()=>{
      setCheck(!check);
      db.collection(useremail).doc(uid).update({
        checkoruncheck: !check
    })
  
    }
    const description1=()=>{
      setOpendialog(!opendialog);
    }
    const mainnameedit=()=>{
      setDialog(!dialog);
       setMaininput(updateinput);
       db.collection(useremail).doc(uid).update({
           Name: updateinput
       })
    }
    const descedit=()=>{
      setOpendialog(!opendialog);
      setDesdialog(editdesdialog);
      db.collection(useremail).doc(uid).update({
           
       description: editdesdialog
     });
    }
    const del=()=>{
     db.collection(useremail).doc(uid).delete();
    }
  
    return (
        <div>
            <Paper className="items" elevation="3">
              <div className="item" id="card"><Checkbox  onClick={checkuncheck} checked={check} style={{color:'green'}} color="primary" />

            <ListItem  >
        <ListItemText ><p className="fontsize">{maininput}</p></ListItemText>
        
      </ListItem><AddIcon onClick={description1}/><EditIcon onClick={()=>{setDialog(!dialog)}} className="icon" fontSize="small" />
        <IconButton onClick={del}><DeleteForeverIcon color="secondary"/></IconButton></div>
     
         <Dialog open={dialog}>
         <DialogContent>
         <TextField
            autoFocus
           onChange={(e)=>{setUpdateinput(e.target.value)}}
            id="name"
            label="Edit Name"
            type="text"
            
          />
         </DialogContent>
         <DialogActions>
          <Button onClick={()=>{setDialog(!dialog)}} color="primary">
            Cancel
          </Button>
          <Button onClick={mainnameedit} color="primary">
            Save
          </Button>
        </DialogActions>
         </Dialog >
         <Dialog fullWidth="true" open={opendialog}>
         <DialogContent>
         <TextField
           multiline
           rows={10}
           onChange={(e)=>{setEditdesdialog(e.target.value)}}
            autoFocus
            defaultValue={desdialog}
            type="text"
            fullWidth
          />
         </DialogContent>
         <DialogActions>
          <Button onClick={()=>{setOpendialog(!opendialog)}}  color="primary">
            Cancel
          </Button>
          <Button onClick={descedit}color="primary">
            Save
          </Button>
        </DialogActions>
         </Dialog>
         
        
            </Paper>
            
        </div>
    )
}

export default Itemlist
