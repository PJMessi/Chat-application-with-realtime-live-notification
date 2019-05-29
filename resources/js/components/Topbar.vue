<template>
    
        <div class="navbar-collapse collapse" id="navbarSupportedContent">
            <!-- ============================================================== -->
            <!-- toggle and nav items -->
            <!-- ============================================================== -->
            <ul class="navbar-nav float-left mr-auto">
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)" data-sidebartype="mini-sidebar">
                        <i class="sl-icon-menu font-20"></i>
                    </a>
                </li>
             
               
           
            </ul>
          
            <ul class="navbar-nav float-right">

                <!-- <li class="nav-item search-box">
                    <a class="nav-link waves-effect waves-dark" href="javascript:void(0)">
                        <i class="ti-search font-16"></i>
                    </a>
                    <form class="app-search position-absolute">
                        <input type="text" class="form-control" placeholder="Search &amp; enter">
                        <a class="srh-btn">
                            <i class="ti-close"></i>
                        </a>
                    </form>
                </li> -->
  
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <span>{{user.name}}</span> &nbsp;
                        <img :src="user.profile_image" alt="user" class="rounded-circle" width="31">
                    </a>
                    <div class="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                        <span class="with-arrow">
                            <span class="bg-primary"></span>
                        </span>
                        <div class="d-flex no-block align-items-center p-15 bg-primary text-white m-b-10">
                            <div class="">
                                <img :src="user.profile_image" alt="user" class="img-circle" width="60">
                            </div>
                            <div class="m-l-10">
                                <h4 class="m-b-0">{{user.name}}</h4>
                                <p class=" m-b-0">{{user.email}}</p>
                            </div>
                        </div>
                    
                        <a @click="logout" class="dropdown-item" href="javascript:void(0)">
                            <i class="fa fa-power-off m-r-5 m-l-5"></i> 
                            Logout
                        </a>
                    
                    </div>
                </li>
             
            </ul>
        </div>
    
</template>

<script>
    export default {
        mounted() {
            console.log('Topbar Component mounted.')
        },

        props: {
            user: {
                type: Object
            }
        },

        methods: {
            logout() {
                console.log("logout from topbar")
                Fire.$emit("logout");
            }
        }
    }
</script>
