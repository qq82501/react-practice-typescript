class todo {
  id: string;
  title: string;
  constructor(todoContent: string) {
    this.id = Date.now().toString();
    this.title = todoContent;
  }
}

function lemon<T>() {}
export default todo;
