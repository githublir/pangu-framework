package com.pulanit.pangu.admin.system.api.param;

import com.pulanit.pangu.admin.system.api.entity.UserEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import lombok.experimental.Accessors;

/**
 * 用户入参
 * @author xiongchun
 */
@Data
@Accessors(chain = true)
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = true)
public class UserIn extends UserEntity {

    /**
     * 所属角色集合
     */
    private long[] roleIds;

}
