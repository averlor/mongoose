<template>
    <div>
        <button class="button" @click.prevent="isVisible = !isVisible">+</button>
        <div class="modal" v-if="isVisible">
            <div class="modal__content">
                <div class="modal__content__todo">
                    <div class="modal__content__title">Group name</div>
                    <div>
                        <input class="modal__content__input input-size-todo" type="text" name="addnewtodo" id="addnewtodo" placeholder="Add new todo-group" v-model="groupName">
                    </div>
                    <div class="modal__content__span">{{ groupName }}</div>
                </div>
                <div class="model__content__tasks">
                    <div class="modal__content__title">Task name</div>
                    <div>
                        <input class="modal__content__input input-size-task" type="text" name="addnewtask" id="addnewtask" placeholder="Add new task" v-model="taskName">
                        <button class="modal__content__task__button button-size">ADD</button>
                    </div>
                </div>
                <div class="modal__content__btn">
                    <button @click.prevent="isVisible = !isVisible" class="modal__content__btn__cancel">cancel</button>
                    <button class="modal__content__btn__save">save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AddNewTodo',
    data() {
        return {
            isVisible: false,
            groupName: '',
            taskName: '',
            tasks: []
        }
    }
}
</script>

<style scoped>
.modal{
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: rgba(0,0,0,.7)
}
.modal__content{
    background-color: #fefefe;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 10px;
    width: 40%;
    height: 60%;
    display: grid;
    grid-template-rows: 1fr 2fr .25fr;

}
.modal__content__todo{
    border-bottom: 1px solid #888;
    margin-bottom: 5px;
    
}
.modal__content__title{
    margin: 0 auto;
    text-align: center;
    font: 600 italic 1.1em 'Times New Roman', serif;
    color: rgb(5, 83, 88);
    margin-bottom: 5px;
}
.modal__content__input{
    border-radius: 5px;
    padding-left: 10px;
    margin-bottom: 1vh;
    outline: none;
    border: 1px solid #bbb;
    font: 500 1.2em Arial, sans-serif;
    color: #555;
}
.input-size-todo{
    width: 98%;
    height: 30%;
}
.input-size-task{
    width: 88%;
    height: 30%;
}
.modal__content__span{
    margin: 0 auto;
    text-align: center;
    font: 600 italic 1.1em 'Times New Roman', serif;
    color: rgb(5, 83, 88);
}
.modal__content__task__button{
    margin-left: 5px;
}
.button-size{
    height: 30%;
}
.modal__content__btn{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1%;  
}
.modal__content__btn__cancel{
    background-color: #ef5656;
    color: white;
    font: 600 1em Arial, sans-serif;
    text-transform: uppercase;
    outline: none;
    border: 1px solid #8c0202;
    cursor: pointer;
}
.modal__content__btn__save{
    background-color: #17ed3f;
    color: white;
    font: 600 1em Arial, sans-serif;
    text-transform: uppercase;
    outline: none;
    border: 1px solid #00931b;
    cursor: pointer;
}
</style>