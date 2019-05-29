<template>
    <ul id="sidebarnav">
        <li class="sidebar-item">
            <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                    " aria-expanded="false">
                <i class="icon-Mail-Read"></i>
                <span class="hide-menu">Contacts</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
                <li v-for="contact in sortedContacts" v-bind:key="contact.id" class="sidebar-item">
                    <a href="#" class="sidebar-link" @click="selectContact($event, contact)" :class="contact.id==selected_contact.id?'active':''">
                        <!-- <i class="mdi mdi-message-alert"></i> -->
                        <img :src="contact.profile_image" alt="user"> &nbsp; &nbsp;

                        <span class="hide-menu"> {{contact.name}} </span> &nbsp;
                        <span class="badge badge-pill badge-primary" v-if="contact.unread">{{contact.unread}}</span>

                    </a>
                </li>
            </ul>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link waves-effect waves-dark sidebar-link" @click="logout" aria-expanded="false">
                <i class="mdi mdi-directions"></i>
                <span class="hide-menu">Log Out</span>
            </a>
        </li>
    </ul>

</template>

<script>
    export default {

        data() {
            return {
                contacts: [],
                selected_contact: {}
            }
        },

        mounted() {
            console.log('ContactList Component mounted.')
            this.fetchContacts();
            Fire.$on("logout", () => {
                this.logout();
            });

            Fire.$on("new_message", (fromContact) => {
                this.updateUnreadCount(fromContact, false);
            });
        },

        methods: {
            fetchContacts() {
                axios.get('api/contacts/fetchContacts')
                .then((response) => {
                    this.contacts = response.data;
                })
                .catch((error) => {
                    console.log("Caught Error: " + error)
                });
            },

            logout() {
                Swal.fire({
                title: 'You will be logged out.',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Okay'
                }).then((result) => {
                    if (result.value) {
                        
                        
                        axios.post('logout')
                        .then((response) => {
                            console.log(response);
                            window.location.href="/home"
                        })
                        .catch((error) => {
                            console.log(error);
                        });

                    }
                })   
            },

            selectContact(e, contact) {
                e.preventDefault();
                this.selected_contact = contact;
                this.updateUnreadCount(contact, true);
                Fire.$emit("contact_selected", this.selected_contact);
            },

            updateUnreadCount(contact,reset) {
                this.contacts = this.contacts.map((single) => {
                    if(single.id !== contact.id){
                        return single;
                    }
                    if(reset) {
                        single.unread = 0;
                    }
                    else {
                        single.unread += 1;
                    }
                    return single;
                })
            } 
        },

        computed: {
            sortedContacts() {
                return _.sortBy(this.contacts, [(contact) => {
                    if(contact == this.selected_contact) {
                        return Infinity;
                    }
                    return contact.unread;
                }]).reverse()
            }
        }
    }
</script>

<style scoped>
img {
    height: 30px;
    width: 30px;
    border-radius: 30px;
}
</style>
