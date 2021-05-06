 <template>
  <div class="markting-uplpad">
    <el-upload
      class="logo-uploader"
      action
      :limit="limit"
      :on-exceed="onExceed"
      :show-file-list="showFileList"
      list-type="picture-card"
      :accept="accept"
      :http-request="upload"
    >
      <slot></slot>
    </el-upload>
  </div>
</template>
<script>
export default {
  name: 'mk-upload',
  props: {
    showFileList: {
      type: Boolean,
      default: false,
    },
    limit: {
      type: Number,
    },
    imgSrc: {
      type: String,
      default: "",
    },
    accept: {
      type: String,
      default: "image/png, image/jpeg, image/gif",
    },
    tip: {
      type: String,
      default: "",
    },
    width: {
      type: Number,
      default: 500,
    },
    height: {
      type: Number,
      default: 500,
    },
    limitSize: {
      type: Number,
      default: 1024 * 1024 * 5,
    },
    isLimitHeight: {
      type: Boolean,
      default: true,
    },
    isLimitWidth: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onExceed(files, fileList) {
      this.$emit('onExceed', files, fileList);
    },
    upload(res) {
      const isLimit = res.file.size < this.limitSize; // 限制小于1M
      if (!isLimit) {
        this.$message.error("图片大小不符合要求!");
        return;
      }
      new Promise((resolve, reject) => {
        let _URL = window.URL || window.webkitURL;
        let img = new Image();
        img.onload = () => {
          let validW = false;
          let validH = false;
          if (this.isLimitWidth && img.width === this.width) validW = true;
          else validW = false;
          if (this.isLimitHeight && img.height === this.height) validH = true;
          else validH = false;
          if (!this.isLimitHeight) validH = true;
          if (!this.isLimitWidth) validW = true;
          validH && validW ? resolve() : reject(new Error());
        };
        img.src = _URL.createObjectURL(res.file);
      }).then(
        () => {
          let formdata = new FormData();
          formdata.append("useof", "RES_YSS_IMG");
          formdata.append("source", "1");
          formdata.append("file", res.file);
          this.$emit('httpRequest', formdata);
          // this.$utils.axiosHttp(
          //     this,
          //     "post",
          //     this.$apiRoot.uploadpath + "/api/storge/object",
          //     formdata
          //   )
          //   .then((result) => {
          //     if (result.code === 0) {
          //       // this.img = result.data
          //       this.$emit("uploadSuccess", result.data);
          //     }
          //   });
        },
        () => {
          this.$message.error("图片尺寸不符合要求!");
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped>


</style>
