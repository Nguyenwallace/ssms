					
function deleteuser(id){	
	//var _token = $("form[name='productForm']").find("input[name='_token']").val();
	if(window.confirm("bạn muốn xóa")){	
		//item--;		
		//$(this).closest('tr').remove();
		document.getElementById('but'+id).closest('tr').remove();
		//for (i=0 ; i<item ; i++){	
				//this one is very suspicious please check carefully
				//document.getElementsByName("item[]")[i].innerHTML = i+1 ;				
			}
		//here to change the item number
		_token= $('meta[name="csrf-token"]').attr('content');
		var url = "http://localhost:8000/manager/ajax/deleteuser";
						$.ajax({						
							type: "post",
							url: url, 	
							cache: false,
							data: {"_token": _token, "id": id},
							/*
							data: {"id": id},
							headers:
							{
								'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
							},
							*/
							dataType: "json",						
							success: function (data) {
								//window.alert(data.message);							
							},
							error:function(){ 
								alert("Why not success? What is problem with Server?!");							
							}						
						});
}				//_token = $('meta[name="csrf-token"]').attr('content');
					//var product= $(this).value;
					
