function addbudget()
{
    let formpage=`<form>
      <table>
        <tr>
          <th> Client Name :</th>
          <td><input type="text" id="fcname"></td>
        </tr>
        <tr>
          <th> Project Name :</th>
          <td><input type="text" id="fpname"></td>
        </tr>
        <tr>
          <th>Budget :</th>
          <td><input type="number" id="fbudget"></td>
        </tr>
        <tr>
          <td colspan="2" align="center">
            <input type="button" onclick="saveform()" value="Add">
            <input type="reset" value="clear">
          </td>
        </tr>
      </table>
</form>`;

    document.getElementById("budget_form").innerHTML=formpage;

}
function  saveform()
{
      if(!localStorage.getItem("budget_list"))
      {
        let list=[];

        localStorage.setItem("budget_list",JSON.stringify(list));

      }
      let budget_json={}
      budget_json["cname"]=document.getElementById("fcname").value;
      budget_json["pname"]=document.getElementById("fpname").value;
      budget_json["budget"]=document.getElementById("fbudget").value;

      let  list1=JSON.parse(localStorage.getItem("budget_list"));
      list1.push(budget_json);
      localStorage.setItem("budget_list",JSON.stringify(list1));
      // localStorage.setItem("budget_list",localStorage.getItem("budget_list").push(budget_json));

      document.getElementById("budget_form").innerHTML="Record is added to localstorage";

}
function viewbudget()
{
   let list=JSON.parse(localStorage.getItem("budget_list"));
   let tabledata=`<table><tr><th>Client Name </th> <th>Project Name </th> <th>Budget</th></tr>`;
  for (let i = 0; i < list.length; i++)
  {
          tabledata += `<tr> <td>${list[i].cname}</td> <td>${list[i].pname}</td> <td>${list[i].budget}</td></tr>`;
  }
  tabledata += `</table>`;
  document.getElementById("budget_form").innerHTML=tabledata;
}
