#
#  Be sure to run `pod spec lint SDKFramework.podspec' to ensure this is a
#  valid spec and to remove all comments including this before submitting the spec.
#
#  To learn more about Podspec attributes see https://guides.cocoapods.org/syntax/podspec.html
#  To see working Podspecs in the CocoaPods repo see https://github.com/CocoaPods/Specs/
#

Pod::Spec.new do |spec|

  # ―――  Spec Metadata  ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  These will help people to find your library, and whilst it
  #  can feel like a chore to fill in it's definitely to your advantage. The
  #  summary should be tweet-length, and the description more in depth.
  #

  spec.name         = "CubeaceIosFramework2"
  spec.version      = "1.0.1"
  spec.summary      = "CubeaceIosFramework2 SDK提供出去供第三方使用的相应文件."

  # This description is used to generate tags and improve search results.
  #   * Think: What does it do? Why did you write it? What is the focus?
  #   * Try to keep it short, snappy and to the point.
  #   * Write the description between the DESC delimiters below.
  #   * Finally, don't worry about the indent, CocoaPods strips it!
  spec.description  = <<-DESC
			广州超方体网络科技有限公司CubeaceIosFramework2 SDK
                   DESC

  spec.homepage     = "https://github.com/Cubeage/CubeaceIosFramework2"
  # spec.screenshots  = "www.example.com/screenshots_1.gif", "www.example.com/screenshots_2.gif"


  # ―――  Spec License  ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  Licensing your code is important. See https://choosealicense.com for more info.
  #  CocoaPods will detect a license file if there is a named LICENSE*
  #  Popular ones are 'MIT', 'BSD' and 'Apache License, Version 2.0'.
  #

  # spec.license      = "MIT (example)"
  spec.license      = { :type => "MIT", :file => "LICENSE" }


  # ――― Author Metadata  ――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  Specify the authors of the library, with email addresses. Email addresses
  #  of the authors are extracted from the SCM log. E.g. $ git log. CocoaPods also
  #  accepts just a name if you'd rather not provide an email address.
  #
  #  Specify a social_media_url where others can refer to, for example a twitter
  #  profile URL.
  #

  spec.author             = { "zzw" => "zhuangzaiwang@gmail.com" }
  # Or just: spec.author    = "zzw"
  # spec.authors            = { "zzw" => "zhuangzaiwang@gmail.com" }
  # spec.social_media_url   = "https://twitter.com/zzw"

  # ――― Platform Specifics ――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  If this Pod runs only on iOS or OS X, then specify the platform and
  #  the deployment target. You can optionally include the target after the platform.
  #

  # spec.platform     = :ios
  spec.platform     = :ios, "9.0"

  #  When using multiple platforms
  # spec.ios.deployment_target = "5.0"
  # spec.osx.deployment_target = "10.7"
  # spec.watchos.deployment_target = "2.0"
  # spec.tvos.deployment_target = "9.0"


  # ――― Source Location ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  Specify the location from where the source should be retrieved.
  #  Supports git, hg, bzr, svn and HTTP.
  #

  spec.source       = { :git => "https://github.com/Cubeage/CubeaceIosFramework2.git", :tag => "#{spec.version}" }


  # ――― Source Code ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  CocoaPods is smart about how it includes source code. For source files
  #  giving a folder will include any swift, h, m, mm, c & cpp files.
  #  For header files it will include any header in the folder.
  #  Not including the public_header_files will make all headers public.
  #

  #spec.source_files  = "Classes", "Classes/**/*.{h,m}"
  #spec.exclude_files = "Classes/Exclude"

  # spec.public_header_files = "Classes/**/*.h"

  #你的SDK路径（因为传的是静态库，这个必须要）
  spec.vendored_frameworks = "CubeaceSDK/*.framework" 


  # ――― Resources ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  A list of resources included with the Pod. These are copied into the
  #  target bundle with a build phase script. Anything else will be cleaned.
  #  You can preserve files from being cleaned, please don't preserve
  #  non-essential files like tests, examples and documentation.
  #

  # spec.resource  = "icon.png"
  #资源文件
  spec.resources = "CubeaceSDK/*.{bundle,plist}"

  # spec.preserve_paths = "FilesToSave", "MoreFilesToSave"


  # ――― Project Linking ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  Link your library with frameworks, or libraries. Libraries do not include
  #  the lib prefix of their name.
  #

  # spec.framework  = "SomeFramework"
  #依赖的系统framework文件
  spec.frameworks = "GameKit", "AuthenticationServices", "Foundation", "UIKit", "StoreKit", "SafariServices", "LocalAuthentication", "AdSupport", "SystemConfiguration", "WebKit", "AudioToolbox", "CoreMedia"

  # spec.library   = "iconv"
  #依赖的系统静态资源
  spec.libraries = "iconv", "xml2", "sqlite3.0", "z", "sqlite3"


  # ――― Project Settings ――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  If your library depends on compiler flags you can set them in the xcconfig hash
  #  where they will only apply to your library. If you depend on other Podspecs
  #  you can include multiple dependencies to ensure it works.

  spec.requires_arc = true

  # spec.xcconfig = { "HEADER_SEARCH_PATHS" => "$(SDKROOT)/usr/include/libxml2" }

  spec.dependency "FBSDKCoreKit"
  spec.dependency "FBSDKLoginKit"
  spec.dependency "FBSDKShareKit"
  spec.dependency "FBSDKPlacesKit"

  spec.dependency "GoogleSignIn", "~> 5.0"

  spec.dependency "Firebase/Analytics"
  spec.dependency "Firebase/DynamicLinks"
  spec.dependency "Firebase/Messaging"

  spec.dependency "GA-SDK-IOS", "~> 2.2"

  ##暂时不需要，因为包括UIWebbView，会提审不了
  #spec.dependency 'TwitterKit'

# ============================== START ShareSDK ==============================
  # 主模块(必须)
  spec.dependency 'mob_sharesdk'
 
 
  # UI模块(非必须，需要用到ShareSDK提供的分享菜单栏和分享编辑页面需要以下1行)
  spec.dependency 'mob_sharesdk/ShareSDKUI'
 
 
  # 平台SDK模块(对照一下平台，需要的加上。如果只需要QQ、微信、新浪微博，只需要以下3行)
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/QQ'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/SinaWeibo'
  #（微信sdk不带支付的命令）
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/WeChat'   
  #（微信sdk带支付的命令，和上面不带支付的不能共存，只能选择一个
  # spec.dependency 'mob_sharesdk/ShareSDKPlatforms/WeChatFull'）
 
  # 平台SDK模块其他平台，按需添加
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/AliPaySocial'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Kakao'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Yixin'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Facebook'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Messenger'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Copy'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Evernote'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/GooglePlus'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Instagram'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Instapaper'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Line'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Mail'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/SMS'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/WhatsApp'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/MeiPai'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/DingTalk'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/YouTube'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Twitter'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Dropbox'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/DingTalk'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/CMCC'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Telegram'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Reddit'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/DouBan'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Flickr'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/KaiXin'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/LinkedIn'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/MingDao'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Pinterest'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Pocket'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Print'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/TencentWeibo'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/Tumblr'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/VKontakte'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/YouDaoNote'
  spec.dependency 'mob_sharesdk/ShareSDKPlatforms/ESurfing'
 
  # 使用配置文件分享模块（非必需）
  spec.dependency 'mob_sharesdk/ShareSDKConfigFile'
 
  # 扩展模块（在调用可以弹出我们UI分享方法的时候是必需的）
  spec.dependency 'mob_sharesdk/ShareSDKExtension'

# ============================== END ShareSDK ==============================


  spec.dependency 'SocketRocket'


end
