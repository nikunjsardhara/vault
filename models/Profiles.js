const mongoose = require('mongoose');
const Profiles = new mongoose.Schema({
  username: {
    type: String,
    required: false,
    maxlength: 50
  },
  firstname: {
    type: String,
    required: false,
    maxlength: 50
  },
  lastname: {
    type: String,
    required: false,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50
  },
  new_email: {
    type: String,
    required: false,
    maxlength: 50
  },
  password: {
    type: String,
    required: true,
    maxlength: 200
  },
  displayname: {
    type: String,
    required: false,
    maxlength: 50
  },
  profile_picture_url: {
    type: String,
    required: false
  },
  profile_banner_url: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false,
    maxlength: 15
  },
  bio: {
    type: String,
    required: false,
    maxlength: 250
  },
  gender: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  dob: {
    type: Date,
    required: false
  },
  interests: {
    type: String,
    required: false,
    maxlength: 200
  },
  facebook_link:{
    type: String,
    required: false,
    maxlength: 100
  },
  blog_link:{
    type: String,
    required: false,
    maxlength: 100
  },
  youtube_link:{
    type: String,
    required: false,
    maxlength: 100
  },
  instagram_link:{
    type: String,
    required: false,
    maxlength: 100
  },
  activity_score: {
    type: Number,
    required: true,
    default:0
  },  
  travel_points: {
    type: Number,
    required: true,
    default:0
  },
  posts_count:{
    type: Number,
    required: true,
    default:0
  },
  followers:{
    type: Array,
    required:true,
    default:[]
  },
  following:{
    type: Array,
    required:true,
    default:[]
  }, 
  application_status:{
    type: String,
    required: false
  }, 
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Profiles', Profiles);