


$("#add_todo").submit(function(event){
    alert("Data Inserted Success!")
})

$("#update_todo").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray()
    var data = {}

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })

    console.log(data)

    var request={
        "url": `http://localhost:4500/api/todo/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully")
    })
})

if(window.location.pathname=="/"){
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request={
            "url": `http://localhost:4500/api/todo/${id}`,
            "method": "DELETE"
        }

        if(confirm("Do you really want to delete this record")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully")
                location.reload()
            })   
        }
    })
}