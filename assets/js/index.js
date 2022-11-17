


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