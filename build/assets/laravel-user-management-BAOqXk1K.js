$(function(){var u=$(".datatables-users"),f=$(".select2"),m=baseUrl+"app/user/view/account",i=$("#offcanvasAddUser");if(f.length){var p=f;p.wrap('<div class="position-relative"></div>').select2({placeholder:"Seleccionar Rol",dropdownParent:p.parent()})}if($.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),u.length)var l=u.DataTable({processing:!0,serverSide:!0,ajax:{url:baseUrl+"user-list"},columns:[{data:"checkbox",orderable:!1,searchable:!1,title:'<input type="checkbox" id="select-all">'},{data:"id",title:"Id",visible:!1},{data:"email",title:"Correo"},{data:"name",title:"Usuario"},{data:"role",title:"Rol Asignado"},{data:"action",title:"Acciones"}],columnDefs:[{targets:0,render:function(t,n,s,r){return`<input type="checkbox" class="user-checkbox" value="${s.id}">`}},{targets:1,render:function(t,n,s,r){return`<span>${s.name}</span>`}},{targets:2,render:function(t,n,s,r){return`<span class="user-email">${s.email}</span>`}},{targets:3,className:"text-center",render:function(t,n,s,r){var d=s.name,e=Math.floor(Math.random()*6),o=["success","danger","warning","info","dark","primary","secondary"],a=o[e],d=s.name,c=d.match(/\b\w/g)||[],v;c=((c.shift()||"")+(c.pop()||"")).toUpperCase(),v='<span class="avatar-initial rounded-circle bg-label-'+a+'">'+c+"</span>";var h='<div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-4">'+v+'</div></div><div class="d-flex flex-column"><a href="'+m+'" class="text-heading text-truncate"><span class="fw-medium">'+d+"</span></a></div></div>";return h}},{targets:4,className:"text-center",render:function(t,n,s,r){var e=s.role;return`<span>${e}</span>`}},{targets:-1,title:"Actions",searchable:!1,orderable:!1,render:function(t,n,s,r){return`<div class="d-flex align-items-center gap-50"><button class="btn btn-sm btn-icon edit-record btn-text-secondary rounded-pill waves-effect" data-id="${s.id}" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddUser"><i class="ti ti-edit"></i></button><button class="btn btn-sm btn-icon delete-record btn-text-secondary rounded-pill waves-effect" data-id="${s.id}"><i class="ti ti-trash"></i></button><button class="btn btn-sm btn-icon reset-password btn-text-warning rounded-pill waves-effect" data-id="${s.id}" data-email="${s.email}"><i class="ti ti-key"></i></button><button class="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="`+m+'" class="dropdown-item">View</a><a href="javascript:;" class="dropdown-item">Suspend</a></div></div>'}}],order:[[2,"desc"]],dom:'<"row"<"col-md-2"<"ms-n2"l>><"col-md-10"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-6 mb-md-0 mt-n6 mt-md-0"fB>>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',lengthMenu:[10,20,50,70,100],language:{sLengthMenu:"Mostrar _MENU_ registros por página",search:"",searchPlaceholder:"Buscar Usuario",info:"Mostrando _START_ a _END_ de _TOTAL_ entradas",paginate:{next:'<i class="ti ti-chevron-right ti-sm"></i>',previous:'<i class="ti ti-chevron-left ti-sm"></i>'}},buttons:[{extend:"collection",className:"btn btn-label-secondary dropdown-toggle mx-4 waves-effect waves-light",text:'<i class="ti ti-upload me-2 ti-xs"></i>Exportar',buttons:[{extend:"print",title:"Usuarios",text:'<i class="ti ti-printer me-2" ></i>Imprimir',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5],format:{body:function(t,n,s){if(t.length<=0)return t;var r=$.parseHTML(t),e="";return $.each(r,function(o,a){a.classList!==void 0&&a.classList.contains("user-name")?e=e+a.lastChild.firstChild.textContent:a.innerText===void 0?e=e+a.textContent:e=e+a.innerText}),e}}},customize:function(t){$(t.document.body).css("color",config.colors.headingColor).css("border-color",config.colors.borderColor).css("background-color",config.colors.body),$(t.document.body).find("table").addClass("compact").css("color","inherit").css("border-color","inherit").css("background-color","inherit")}},{extend:"csv",title:"Usuarios",text:'<i class="ti ti-file-text me-2" ></i>Csv',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5],format:{body:function(t,n,s){if(t.length<=0)return t;var r=$.parseHTML(t),e="";return $.each(r,function(o,a){a.classList!==void 0&&a.classList.contains("user-name")?e=e+a.lastChild.firstChild.textContent:a.innerText===void 0?e=e+a.textContent:e=e+a.innerText}),e}}}},{extend:"excel",title:"Usuarios",text:'<i class="ti ti-file-spreadsheet me-2"></i>Excel',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5],format:{body:function(t,n,s){if(t.length<=0)return t;var r=$.parseHTML(t),e="";return $.each(r,function(o,a){a.classList!==void 0&&a.classList.contains("user-name")?e=e+a.lastChild.firstChild.textContent:a.innerText===void 0?e=e+a.textContent:e=e+a.innerText}),e}}}},{extend:"pdf",title:"Usuarios",text:'<i class="ti ti-file-code-2 me-2"></i>Pdf',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5],format:{body:function(t,n,s){if(t.length<=0)return t;var r=$.parseHTML(t),e="";return $.each(r,function(o,a){a.classList!==void 0&&a.classList.contains("user-name")?e=e+a.lastChild.firstChild.textContent:a.innerText===void 0?e=e+a.textContent:e=e+a.innerText}),e}}}},{extend:"copy",title:"Usuarios",text:'<i class="ti ti-copy me-2" ></i>Copiar',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5],format:{body:function(t,n,s){if(t.length<=0)return t;var r=$.parseHTML(t),e="";return $.each(r,function(o,a){a.classList!==void 0&&a.classList.contains("user-name")?e=e+a.lastChild.firstChild.textContent:a.innerText===void 0?e=e+a.textContent:e=e+a.innerText}),e}}}}]},{text:'<i class="ti ti-plus me-0 me-sm-1 ti-xs"></i><span class="d-none d-sm-inline-block">Agregar Nuevo Usuario</span>',className:"add-new btn btn-primary waves-effect waves-light",attr:{"data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasAddUser"}}],responsive:{details:{display:$.fn.dataTable.Responsive.display.modal({header:function(t){var n=t.data();return"Detalles de "+n.name}}),type:"column",renderer:function(t,n,s){var r=$.map(s,function(e,o){return e.title!==""?'<tr data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><td>'+e.title+":</td> <td>"+e.data+"</td></tr>":""}).join("");return r?$('<table class="table"/><tbody />').append(r):!1}}}});$(document).on("click",".delete-record",function(){var t=$(this).data("id"),n=$(".dtr-bs-modal.show");n.length&&n.modal("hide"),Swal.fire({title:"Estás seguro?",text:"Esta acción no se puede deshacer",icon:"warning",showCancelButton:!0,confirmButtonText:"Sí, eliminar",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",customClass:{popup:"swal2-popup swal2-modal swal2-icon-warning swal2-show",icon:"swal2-icon swal2-warning swal2-icon-show",actions:"swal2-actions"},buttonsStyling:!0}).then(function(s){s.value?($.ajax({type:"DELETE",url:`${baseUrl}user-list/${t}`,success:function(){l.draw()},error:function(r){console.log(r)}}),Swal.fire({icon:"success",title:"Eliminado!",customClass:{confirmButton:"btn btn-success"}})):s.dismiss===Swal.DismissReason.cancel&&Swal.fire({title:"Cancelled",text:"El usuario no fue eliminado!",icon:"error",customClass:{confirmButton:"btn btn-success"}})})}),$(document).on("click",".edit-record",function(){var t=$(this).data("id"),n=$(".dtr-bs-modal.show");n.length&&n.modal("hide"),$("#offcanvasAddUserLabel").html("Editar Usuario"),$.get(`${baseUrl}user-list/${t}/edit`,function(s){$("#user_id").val(s.id),$("#add-user-fullname").val(s.name),$("#add-user-email").val(s.email),$("#user-role").empty(),$.get(`${baseUrl}api/roles`,function(r){r.data.forEach(function(e){var o=new Option(e.name,e.id,!1,e.id==s.role_id);$("#user-role").append(o)}),$("#user-role").val(s.role_id).trigger("change")})})}),i.on("hidden.bs.offcanvas",function(){b.resetForm(!0),$("#user-role").val(null).trigger("change")}),$(".add-new").on("click",function(){$("#user_id").val(""),$("#offcanvasAddUserLabel").html("Agregar Usuario"),$("#user-role").val(null).trigger("change")}),setTimeout(()=>{$(".dataTables_filter .form-control").removeClass("form-control-sm"),$(".dataTables_length .form-select").removeClass("form-select-sm")},300);const g=document.getElementById("addNewUserForm"),b=FormValidation.formValidation(g,{fields:{name:{validators:{notEmpty:{message:"Por favor ingrese el nombre completo"}}},email:{validators:{notEmpty:{message:"Por favor ingrese su correo"},emailAddress:{message:"El valor no es una dirección de correo válida"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:function(t,n){return".mb-6"}}),submitButton:new FormValidation.plugins.SubmitButton,autoFocus:new FormValidation.plugins.AutoFocus}}).on("core.form.valid",function(){$.ajax({data:$("#addNewUserForm").serialize(),url:`${baseUrl}user-list`,type:"POST",success:function(t){l.draw(),i.offcanvas("hide"),Swal.fire({icon:"success",title:"¡Éxito!",text:`Usuario ${t.message} exitosamente.`,customClass:{confirmButton:"btn btn-success"}})},error:function(t){i.offcanvas("hide"),Swal.fire({title:"Entrada duplicada!",text:"El correo debe ser único.",icon:"error",customClass:{confirmButton:"btn btn-success"}})}})});i.on("hidden.bs.offcanvas",function(){b.resetForm(!0)});function x(t){Swal.fire({icon:"success",title:"Éxito",text:t,showConfirmButton:!1,timer:1500})}$("#editUserForm").on("submit",function(t){t.preventDefault();const n=$("#user_id").val(),s=$("#add-user-fullname").val(),r=$("#add-user-email").val(),e=$("#user-role").val();$.ajax({url:`/api/users/${n}`,type:"PUT",data:{name:s,email:r,role:e,role_id:e},success:function(o){o.status==="success"?x("Usuario editado correctamente"):console.error("Error al editar el usuario:",o.message)},error:function(o){console.error("Error en la solicitud:",o)}})}),$(document).on("click",".delete-user",function(){const t=$(this).data("id");confirm("¿Estás seguro de que deseas eliminar este usuario?")&&$.ajax({url:`/api/users/${t}`,type:"DELETE",success:function(n){n.status==="success"?x("Usuario eliminado correctamente"):console.error("Error al eliminar el usuario:",n.message)},error:function(n){console.error("Error en la solicitud:",n)}})}),$(document).on("click",".reset-password",function(){const t=$(this).data("email");Swal.fire({title:"¿Enviar correo de restauración?",text:`Se enviará un correo a ${t} con las instrucciones para restaurar la contraseña`,icon:"warning",showCancelButton:!0,confirmButtonText:"Sí, enviar",cancelButtonText:"Cancelar",customClass:{confirmButton:"btn btn-primary me-3",cancelButton:"btn btn-label-secondary"},buttonsStyling:!1}).then(function(n){n.value&&$.ajax({url:"/forgot-password",type:"POST",data:{email:t,_token:$('meta[name="csrf-token"]').attr("content")},success:function(s){s.status==="success"&&Swal.fire({icon:"success",title:"¡Correo enviado!",text:s.message,customClass:{confirmButton:"btn btn-success"}})},error:function(s){Swal.fire({title:"Error",text:s.responseJSON?s.responseJSON.message:"Ocurrió un error al enviar el correo",icon:"error",customClass:{confirmButton:"btn btn-success"}})}})})}),$("#select-all").on("click",function(){var t=l.rows({search:"applied"}).nodes();$('input[type="checkbox"]',t).prop("checked",this.checked)}),$("#delete-selected").on("click",function(){var t=[];$(".user-checkbox:checked").each(function(){t.push($(this).val())}),t.length>0?Swal.fire({title:"¿Estás seguro?",text:"Esta acción no se puede deshacer",icon:"warning",showCancelButton:!0,confirmButtonText:"Sí, eliminar",cancelButtonText:"Cancelar",customClass:{confirmButton:"btn btn-primary me-3",cancelButton:"btn btn-label-secondary"},buttonsStyling:!1}).then(function(n){n.value&&$.ajax({type:"POST",url:`${baseUrl}user-list/delete-multiple`,data:{ids:t},success:function(s){l.draw(),Swal.fire({icon:"success",title:"Eliminado!",text:"Los usuarios seleccionados han sido eliminados.",customClass:{confirmButton:"btn btn-success"}})},error:function(s){console.error("Error al eliminar usuarios:",s)}})}):Swal.fire({title:"No hay usuarios seleccionados",text:"Por favor, selecciona al menos un usuario para eliminar.",icon:"info",customClass:{confirmButton:"btn btn-primary"}})})});