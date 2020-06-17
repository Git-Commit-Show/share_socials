**Purpose:**

Making it easy and personalized to share git commit show content and daily updates. Admin will create daily social posts for various social media platforms with all data pre-filled - media, text, hashtags, etc. User will be able to share these posts within two clicks.

**Routes:**

- `gitcommit.show/share/create` Create new social post form - picture/video/video-link, text, channel, showsOn, HidesOn [The post should be visible between datetime showsOn and HidesOn]
- `gitcommit.show/share` List of posts for today
  - Share post action - click on the choice of social platform → share
- `gitcommit.show/share?brand=YourStory` Special link to pre-fill the brand name and add brand logo to the poster
