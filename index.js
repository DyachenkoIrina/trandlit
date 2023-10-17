const addBtn = document.querySelector("#add_btn");
const input = document.querySelector("#input");
const list = document.querySelector("#list");
const list1 = document.querySelector("#list1");
const editedList1 = document.querySelector("#edited_list1");
const editedList = document.querySelector("#edited_list");
const clearBtn = document.querySelector("#clear_btn");

function createNewItem() {
  const listItem = document.createElement("div");
  const editedListItem = document.createElement("div");

  const listItemWrapper = document.createElement("div");
  const itemNumber = document.createElement("div");
  const itemName = document.createElement("p");

  const editedListItemWrapper = document.createElement("div");
  const editedItemNumber = document.createElement("div");
  const editedItemName = document.createElement("p");
  const editedIDeleteBtn = document.createElement("button");

  const itemNumbers = document.querySelectorAll(".item_number");

  list1.style.borderRadius = "8px 0px 0px 0px";
  editedList1.style.borderRadius = "0px 8px 0px 0px";

  listItem.className = "list_item";
  editedListItem.className = "edited_list_item";

  listItemWrapper.className = "list_item_wrapper";
  itemNumber.className = "item_number";
  itemName.className = "item_name";

  editedListItemWrapper.className = "list_item_wrapper";
  editedItemNumber.className = "edited_item_number";
  editedItemName.className = "item_name";
  editedIDeleteBtn.className = "edited_delete_btn";

  itemName.innerText = input.value;
  itemName.innerText =
    itemName.innerText.charAt(0).toUpperCase() + itemName.innerText.slice(1);
  editedItemName.innerText = translit(itemName.innerText);

  itemNumber.innerText = itemNumbers.length + 1;
  editedItemNumber.innerText = itemNumbers.length + 1;

  list.append(listItem);
  listItem.append(listItemWrapper);
  listItemWrapper.append(itemName);
  listItemWrapper.prepend(itemNumber);

  editedList.append(editedListItem);
  editedListItem.append(editedListItemWrapper);
  editedListItem.append(editedIDeleteBtn);
  editedListItemWrapper.append(editedItemName);
  editedListItemWrapper.prepend(editedItemNumber);

  if (itemName.innerText.length > 5 && editedItemName.innerText.length > 5) {
    itemName.setAttribute("data-tooltip", itemName.innerText);
    editedItemName.setAttribute("data-tooltip", editedItemName.innerText);
  }

  editedIDeleteBtn.addEventListener("click", () => {
    listItem.remove();
    editedListItem.remove();

    const itemNumbers = document.querySelectorAll(".item_number");
    const editedItemNumbers = document.querySelectorAll(".edited_item_number");

    editedItemNumbers.forEach((element, index) => {
      element.innerText = index + 1;
    });

    itemNumbers.forEach((element, index) => {
      element.innerText = index + 1;
    });
  });
}

function translit(text) {
  let result = "";

  text = text.toLowerCase();

  let alphabet = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ь: "",
    ы: "y",
    ъ: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };

  for (let i = 0; i < text.length; i++) {
    if (alphabet[text[i]] === undefined) {
      result += text[i];
    } else {
      result += alphabet[text[i]];
    }
  }

  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result;
}

clearBtn.addEventListener("click", (event) => {
  list.remove();
  editedList.remove();
  event.preventDefault();
});

addBtn.addEventListener("click", () => {
  createNewItem();
  input.value = "";
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    createNewItem();
    input.value = "";
  }
});
