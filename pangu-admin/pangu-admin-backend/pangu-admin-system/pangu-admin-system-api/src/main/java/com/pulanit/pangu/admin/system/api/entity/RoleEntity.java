package com.pulanit.pangu.admin.system.api.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;
import lombok.experimental.Accessors;
import java.io.Serializable;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 角色表
 * <p>此文件由代码生成器自动生成</p>
 *
 * @author 普蓝开源社区
 * @date 2022-09-02 11:50:39
 */
@Data
@Accessors(chain = true)
@TableName("role")
public class RoleEntity implements Serializable {

   private static final long serialVersionUID=1L;

   /**
    *  流水号
    */
   @TableId(value = "id", type = IdType.AUTO)
   private Integer id;

   /**
    * 角色名称
    */
   @TableField(value = "name")
   private String name;

   /**
    * 是否启用
    */
   @TableField(value = "enabled")
   private String enabled;

   /**
    * 角色类型
    */
   @TableField(value = "type")
   private String type;

   /**
    * 扩展字段(JSON)
    */
   @TableField(value = "ext")
   private String ext;

   /**
    * 创建时间
    */
   @TableField(value = "gmt_created")
   @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
   private Date gmtCreated;

   /**
    * 创建人
    */
   @TableField(value = "created_by")
   private String createdBy;

   /**
    * 修改时间
    */
   @TableField(value = "gmt_modified")
   @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
   private Date gmtModified;

   /**
    * 修改人
    */
   @TableField(value = "modified_by")
   private String modifiedBy;

}
