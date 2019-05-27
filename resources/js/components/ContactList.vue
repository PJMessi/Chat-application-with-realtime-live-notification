<template>
    
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            <li v-for="contact in contacts" v-bind:key="contact.id" class="nav-item">
                <a href="#" class="nav-link" @click="select_contact(contact)">
                    
                    <img :src="contact.profile_image" alt="profile image" class="user_thumbnail">
                    &nbsp;
                    <p :class="contact==selected_contact? 'selected_contact' : '' ">
                        {{contact.name}}
                        <!-- <span class="right badge badge-danger">New</span> -->
                    </p>
                </a>
            </li>

        </ul>
    </nav> 

</template>

<script>
    export default {
        props: {
            contacts: {
                type: Array,
                default: []
            }
        },
        data(){
            return {
                selected_contact: {}
            }
        },

        mounted() {
            console.log('ContactList Component mounted.')
        },

        methods: {
            select_contact(contact) {
                this.selected_contact = contact;
                this.$emit("contact_selected", this.selected_contact);
            }
        }
    }
</script>

<style scoped>
    .user_thumbnail {
        height: 30px;
        width: 30x;
        border-radius: 30px;
    }

    .selected_contact {
        color: #fff;
    }
</style>
