module.exports = {
  // Client ID are safe to expose
  client_id:
    "126409166174-l0f9hdblsrmhkt9jeue9m8o93skfs1sr.apps.googleusercontent.com",

  /**
   * Change this value to match your platform.
   */
  basePath:
    process.env.NODE_ENV === "production"
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:5000",

  /**
   * Hashed key used for getting protected file for metadata
   */
  masterKey:
    "640e3e38dd31aec254f214ba38541a82ddb615e73ce9c6129f33ef549b154ab9",

  files: {
    query: ["trashed = false"],
    field:
      "id, name, mimeType, thumbnailLink, fileExtension, modifiedTime, size, imageMediaMetadata, videoMediaMetadata, webContentLink, iconLink, trashed",
    orderBy: "folder, name asc, modifiedTime desc",
    /**
     * Special file names that will be used for certain purposes
     * These files will be ignored when searching for files
     * and will be hidden from the file list
     */
    specialFile: {
      password: ".password",
      readme: ".readme.md",
      /**
       * Banner are used for generating custom open graph image for folder
       * By default, all folder will use the og.png inside public folder
       */
      banner: ".banner",
    },
    hiddenFiles: [".password", ".readme.md", ".banner"],
    itemsPerPage: 50,
    searchResult: 10,
    /**
     * Starting point of the drive
     * U̶s̶e̶ ̶'̶r̶o̶o̶t̶'̶ ̶t̶o̶ ̶u̶s̶e̶ ̶M̶y̶ ̶D̶r̶i̶v̶e̶ ̶a̶s̶ ̶s̶t̶a̶r̶t̶i̶n̶g̶ ̶p̶o̶i̶n̶t̶
     * O̶r̶ ̶u̶s̶e̶ ̶f̶o̶l̶d̶e̶r̶ ̶i̶d̶ ̶t̶o̶ ̶u̶s̶e̶ ̶a̶ ̶s̶p̶e̶c̶i̶f̶i̶c̶ ̶f̶o̶l̶d̶e̶r̶ ̶a̶s̶ ̶s̶t̶a̶r̶t̶i̶n̶g̶ ̶p̶o̶i̶n̶t̶
     * Since service account can't access 'root' folder, we need to use folder id
     * Why using service account? Since refresh token always expired, I need to use service account to make sure the app always work
     */
    rootFolder: "1KgPV6QB1GYT8fmn2uTfbtr9rDXqcRR0j",
    download: {
      /**
       * Allow user to download protected file without password
       * If this set to false, the download link will have temporary token to download the files
       * If this set to true, the download link will be permanent
       * Default: false
       */
      allowProtectedFile: false,
      temporaryTokenDuration: 60 * 60, // 1 hour
      /**
       * If you're using Vercel, the max response size is 4.5MB
       * https://vercel.com/docs/platform/limits#serverless-function-payload-size-limit
       * If you're using another platform that has different limit,
       * change this value to match your platform.
       * Set to 0 to disable limit
       */
      maxFileSize: 4 * 1024 * 1024,
    },
  },

  /**
   * https://web.dev/uses-long-cache-ttl/
   */
  cacheControl: "s-maxage=60, stale-while-revalidate",
};
