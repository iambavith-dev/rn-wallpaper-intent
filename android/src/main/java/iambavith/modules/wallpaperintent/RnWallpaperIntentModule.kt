package iambavith.modules.wallpaperintent

import android.content.Intent
import android.net.Uri
import android.util.Log
import androidx.core.content.FileProvider
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.io.File
import java.io.FileOutputStream
import java.net.URL

class RnWallpaperIntentModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("RnWallpaperIntent")

    AsyncFunction("openSetWallpaperFromUrl") { urlString: String ->
      val activity = appContext.currentActivity ?: throw IllegalStateException("No current activity")

      try {
        
        val file = File(activity.cacheDir, "wallpaper.jpg")
        URL(urlString).openStream().use { input ->
          FileOutputStream(file).use { output ->
            input.copyTo(output)
          }
        }
        
        val uri: Uri = FileProvider.getUriForFile(
          activity,
          activity.packageName + ".provider",
          file
        )
        
        val intent = Intent(Intent.ACTION_ATTACH_DATA).apply {
          addCategory(Intent.CATEGORY_DEFAULT)
          setDataAndType(uri, "image/*")
          putExtra("mimeType", "image/*")
          addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
        }
        
        activity.startActivity(Intent.createChooser(intent, "Set as:"))
        
        true
        
      } catch (e: Exception) {
        
        throw e
      }
    }
  }
}
