import "./newcategories.css";

export default function NewCategories() {
  return (
    <div className="newCategory">
      <h1 className="addCategoryTitle">Category</h1>
      <form className="addCategoryForm">
        <div className="addCategoryItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addCategoryItem">
          <label>Name</label>
          <div className="addCategoryItemDescName">
            <input type="text" placeholder="category name" />
          </div>
        </div>
        <div className="addCategoryItem">
          <label>Description</label>
          <div className="addCategoryItemDesc">
            <input type="text" placeholder="Description" />
          </div>
        </div>
        <button className="addCategoryButton">Create</button>
      </form>
    </div>
  );
}
