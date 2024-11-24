/* centralized ALL logic now in reducer() --- instead of having separate state handling logic fns
"action" is always an obj we take it (type: addMsg, deleteMsg, etc.) */

// import reducer function actions
import { ACTION } from "./reducerActions.mjs";

export function msgReducer(comments, action){
    switch(action.type){
        case ACTION.ADDMSG:
            // if no comment is inserted ... just display current comments list (no change)
            if(action.payload.title === ""){
                return comments;
            }
            let msgInclude = false;
            // iterate via each comment in message board
            comments.forEach((msg) => {
                // if msg is already on the board alert user
                if(msg.title === action.payload.title){
                    // string interpolation ($) on tempate literals (``) for a customize BOM .alert() -- recall: can NOT stylize BOM text
                    let dupeMsg = window.alert(`🚨 Duplicate message detected: 🚨 \t "${action.payload.title}" \n \n 💡 WARNING: BOT DETECTED 💡`);
                    msgInclude = true;
                }
            });
            // return current list of comments
            if(msgInclude){
                return comments;
            }
            /* use spread operator (...) to create a copy of previous list of comments (both objs, arrays are immutable in state)
            along with a newly added comment to an array */
            return [ newMsg(action.payload.title), ...todos];
        case ACTION.REMOVEMSG:
            // goes through todos list & create a new copy where ...
            return(comments.filter((msg) => 
                /*NOTE TO SELF:  do NOT put {} else filter will encapsulate ALL tasks at hand (delete all when pressed) */
                // if task's id DN equal to task payload id, keep it --- otw remove
                msg.id !== action.payload.id
            )); 
            
        case ACTION.EDITMSG:
            /* since objs/arrays & state are immutable in React ...
            use JS array.map() method to create a new array populated w/ results by calling provided arrow fn on each elem in called array */
            return(comments.map((msg) => {
                // if msg id matches current id
                if(msg.id === action.payload.id){
                // not sure if just assigning key to new value in React obj will work pretty sure NOT as immutable so would need spread operator, map, filter, or other
                // msg.title = action.payload.title;
                return({ ...msg, title: action.payload.title });
                // return(action.payload.title);
                }
                else{
                    return(msg)
                }
            }));

        // default action if neither of the actions above are invoked
        default:
            // return current state
            return todos;
    }
}

// helper function for creating a new msg
function newMsg(title){
    // "id" -- essential for updating/deleting, set to Date.now() for unique id
    // "title" -- description of task
    // "human" -- default to false b4 human verifies it
    return({ id: Date.now(), title: title, human: false })
}