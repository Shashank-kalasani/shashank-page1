const todolist = ['Home work'];
const cal_list=['16-01-2025'];
rendertodo();
rendercal();
function rendertodo() {


    let todolistHTML = '';

    
    for (let i = 0; i < todolist.length; i++) {
        const todo = todolist[i];
        const html = `<p>${todo}</p>`
        todolistHTML += html;
    }
    console.log(todolistHTML);
    document.querySelector('.js-list').innerHTML = todolistHTML;
}
function addTodo() {
    const inputelement = document.querySelector('.js-input');
    const name = inputelement.value.trim();

    todolist.push(name);
    console.log(todolist);
    inputelement.value = '';
    rendertodo();
}
function rendercal() {
    let cal_text='';

      for(let i=0;i<cal_list.length;i++)
      {
        const date=`<p>${cal_list[i]}<button onclick="
        todolist.splice(${i},1);
        cal_list.splice(${i},1);
        rendertodo();
        rendercal();
        " class="del">Delete</button></p>`
        cal_text += date;
      }
      document.querySelector('.cal').innerHTML=cal_text;
}
function addcal(){
    const inputcal=document.querySelector('.js-cal');
    const cal=inputcal.value;
    cal_list.push(cal);
    inputcal.value='';
    rendercal();
}

